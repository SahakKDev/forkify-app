import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);

  if (!id) return;
  recipeView.renderSpinner();
  resultsView.update(model.getSearchResultsPage());

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
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addhandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPaginationAndResults);
};

init();
