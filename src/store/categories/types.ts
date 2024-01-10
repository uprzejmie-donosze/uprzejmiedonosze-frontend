import { Categories } from "../../api/responses";

export type CategoriesState = {
  loading: boolean;
  loaded: boolean;
  categories: Categories | null;
};
