import { Dispatch } from "redux";
import * as ACTIONS from "./actionTypes";
import { apiClient } from "../../api";
import { addError } from "../fallback";

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
      dispatch(addError(error.message));
    }
  };
}
