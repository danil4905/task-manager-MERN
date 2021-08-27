import { constants } from "../const/constants";

let initialState = {
  opened: false,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.header.OPEN_MENU:
      return {
        ...state,
        opened: action.payload,
      };
    case constants.header.TOGGLE_MENU:
      return {
        ...state,
        opened: !state.opened,
      };
    case constants.header.CLOSE_MENU:
      return {
        ...state,
        opened: false,
      };
    default:
      return state;
  }
};

export default headerReducer;
