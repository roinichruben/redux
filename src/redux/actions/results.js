export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_COMPLETE = "FETCH_RECIPES_COMPLETE";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";
export const ADD_SEARCH_ITEM = "ADD_SEARCH_ITEM";

export const fetchRecipesStart = () => ({
  type: FETCH_RECIPES_START,
});

const fetchRecipesComplete = (payload) => ({
  type: FETCH_RECIPES_COMPLETE,
  payload,
});

const fetchRecipesError = () => ({
  type: FETCH_RECIPES_ERROR,
  error,
});

export const addSearchItem = (payload) => ({
  type: ADD_SEARCH_ITEM,
  payload,
});
