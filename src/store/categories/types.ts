import { Category } from "../../api/responses";
import * as ACTIONS from "./actionTypes";

export type CategoriesState = {
  loading: boolean;
  loaded: boolean;
  categories: Category[] | null;
};

export type CategoriesActionLoading = {
  type: typeof ACTIONS.CATEGORIES_LOADING;
};

export type CategoriesActionLoaded = {
  type: typeof ACTIONS.CATEGORIES_LOADED;
  payload: { categories: Category[] };
};

export type CategoriesActionError = {
  type: typeof ACTIONS.CATEGORIES_ERROR;
};

export type CategoriesAction =
  | CategoriesActionLoading
  | CategoriesActionLoaded
  | CategoriesActionError;
