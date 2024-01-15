import { Dispatch } from "redux";
import * as ACTIONS from "./actionTypes";
import { apiClient } from "../../api";
import { FALLBACK_ERROR } from "../fallback/actionTypes";

export function getCategories() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ACTIONS.CATEGORIES_LOADING });
      const categories = await apiClient.getCategories();
      const sorted = categories.sort((a, b) => a.order - b.order);
      dispatch({
        type: ACTIONS.CATEGORIES_LOADED,
        payload: { categories: sorted },
      });
    } catch (error) {
      dispatch({ type: ACTIONS.CATEGORIES_ERROR });
      dispatch({ type: FALLBACK_ERROR, payload: { error: error.message } });
    }
  };
}
