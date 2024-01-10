import { Category } from "../../api/responses";
import { CATEGORIES_ACTIONS } from "./actionTypes";
import { CategoriesState } from "./types";

const initialState: CategoriesState = {
  loading: false,
  loaded: false,
  categories: null,
};

export function categoriesReducer(state = initialState, action: any) {
  switch (action.type) {
    case CATEGORIES_ACTIONS.loading:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case CATEGORIES_ACTIONS.loaded:
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: action.payload.categories as [Category],
      };
    case CATEGORIES_ACTIONS.error:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state || initialState;
  }
}
