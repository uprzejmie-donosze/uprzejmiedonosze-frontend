import { APP_ACTIONS } from "./actionTypes";

export type AppState = {
  isNavOpened: boolean;
};

export type OpenNavAction = {
  type: typeof APP_ACTIONS.openNav;
  isNavOpened: boolean;
};

export type CloseNavAction = {
  type: typeof APP_ACTIONS.closeNav;
  isNavOpened: boolean;
};

export type ActionType = CloseNavAction | OpenNavAction;
