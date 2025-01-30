import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";
import bookmarksView from "./views/bookmarksView";
import addRecipeView from "./views/addRecipeView";
import { MODAL_CLOSE_SEC } from "./config";

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);

  if (!id) return;
  recipeView.renderSpinner();
  resultsView.update(model.getSearchResultsPage());
  bookmarksView.update(model.state.bookmarks);

  try {
    await model.loadRecipe(id);
  } catch (err) {
    recipeView.renderError();
    return;
  }
  const { recipe } = model.state;

  recipeView.render(recipe);
};

const controlPaginationAndResults = function (goToPage = 1) {
  resultsView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};

const controlSearchResults = async function () {
  const search = searchView.getQuery();
  if (!search) return;

  try {
    resultsView.renderSpinner();

    await model.loadSearchResults(search);

    controlPaginationAndResults();
  } catch (err) {
    resultsView.renderError();
    return;
  }
};

const controlServings = function (newServings) {
  model.updateServings(newServings);

  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  const currentRecipe = model.state.recipe;
  if (currentRecipe.bookmarked === true) {
    model.removeBookmark(currentRecipe.id);
  } else {
    model.addBookmark(currentRecipe);
  }

  recipeView.update(currentRecipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    const { recipe } = model.state;

    recipeView.render(recipe);

    // render success message in window
    addRecipeView.renderMessage();

    controlBookmarks();

    // change id in the URL
    window.history.pushState(null, "", `#${recipe.id}`);

    setTimeout(() => {
      addRecipeView.closeWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addhandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPaginationAndResults);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();

/*
  TODO
  1. Display NUMBER OF PAGES between the pagination buttons
  2. Ability to sort search results by DURATION
  3. Perform INGREDIENT VALIDATION in view, before submitting the form

  HARD
  1. Shopping list feature: button on recipe to add ingredients to a list
  2. Weekly meal planning feature: assign recipes to the next 7 days and show on a weekly calendar
  3. GET NUTRATION DATA on each ingredient from spoonacular API (https://spoonacular.com/food-api) and calc total calories of recipe.
*/
