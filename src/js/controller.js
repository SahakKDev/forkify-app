import * as model from "./model";

// Views
import recipeView from "./views/recipeView";

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////

const controleRecipes = async function () {
  const id = window.location.hash.slice(1);

  if (!id) return;
  await recipeView.renderSpinner(recipeContainer);
  await model.loadRecipe(id);
  const { recipe } = model.state;

  recipeView.render(recipe);
};

["hashchange", "load"].forEach((eventName) =>
  window.addEventListener(eventName, controleRecipes)
);
