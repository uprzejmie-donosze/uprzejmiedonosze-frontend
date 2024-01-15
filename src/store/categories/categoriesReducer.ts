import * as ACTIONS from "./actionTypes";
import { CategoriesAction, CategoriesState } from "./types";

const initialState: CategoriesState = {
  loading: false,
  loaded: false,
  categories: [],
};

export function categoriesReducer(
  state = initialState,
  action: CategoriesAction,
) {
  switch (action.type) {
    case ACTIONS.CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case ACTIONS.CATEGORIES_LOADED:
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: { ...action.payload.categories },
      };
    case ACTIONS.CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state || initialState;
  }
}
