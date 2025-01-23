import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);

  if (!id) return;
  recipeView.renderSpinner();

  try {
    await model.loadRecipe(id);
  } catch (err) {
    recipeView.renderError();
    return;
  }
  const { recipe } = model.state;

  recipeView.render(recipe);
};

const controlSearchResults = async function () {
  const search = searchView.getQuery();
  if (!search) return;

  try {
    resultsView.renderSpinner();

    await model.loadSearchResults(search);

    const {
      search: { results },
    } = model.state;

    resultsView.render(results);
  } catch (err) {
    resultsView.renderError();
    return;
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
