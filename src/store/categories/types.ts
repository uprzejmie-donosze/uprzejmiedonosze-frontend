import { Category } from "../../api/responses";

export type CategoriesState = {
  loading: boolean;
  loaded: boolean;
  categories: [Category] | null;
};
