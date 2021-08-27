import { constants } from "../const/constants";

export const openToggleHeader = (opened) => ({
  type: constants.header.OPEN_MENU,
  payload: opened,
});
export const toggleMenu = () => ({ type: constants.header.TOGGLE_MENU });
