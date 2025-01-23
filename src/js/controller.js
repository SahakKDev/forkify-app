import * as model from "./model";
import recipeView from "./views/recipeView";

const controleRecipes = async function () {
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

recipeView.addHandlerRender(controleRecipes);
