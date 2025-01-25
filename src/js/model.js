import { API_URL, BOOKMARKS, RESULTS_PER_PAGE } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.image_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    if (state.bookmarks.some(({ id }) => id === state.recipe.id)) {
      state.recipe.bookmarked = true;
    }
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach((ing) => {
    if (ing.quantity) {
      // newQt = oldQt * newServings / oldServings
      ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    }
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem(BOOKMARKS, JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);

  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }
  persistBookmarks();
};

export const removeBookmark = function (id) {
  state.bookmarks = state.bookmarks.filter(({ id: bId }) => bId !== id);

  if (state.recipe.id === id) {
    state.recipe.bookmarked = false;
  }
  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem(BOOKMARKS);

  if (storage) {
    state.bookmarks = JSON.parse(storage);
  }
};
init();

const clearBookmarks = function () {
  localStorage.clear(BOOKMARKS);
};
// For development: to clear bookmarks faster
// clearBookmarks();
