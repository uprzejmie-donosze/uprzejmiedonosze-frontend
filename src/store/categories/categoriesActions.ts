import { Dispatch } from "redux";
import { CATEGORIES_ACTIONS } from "./actionTypes";
import { apiClient } from "../../api";
import { FALLBACK_ACTIONS } from "../fallback/actionTypes";

export function getCategories() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CATEGORIES_ACTIONS.loading });
      const categories = await apiClient.getCategories();
      dispatch({ type: CATEGORIES_ACTIONS.loaded, payload: { categories } });
    } catch (error) {
      dispatch({ type: CATEGORIES_ACTIONS.error });
      dispatch({ type: FALLBACK_ACTIONS.error });
    }
  };
}