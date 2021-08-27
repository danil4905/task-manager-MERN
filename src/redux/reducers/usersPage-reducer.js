import { constants } from "../const/constants";

const initialState = {
  search: "",
  currentType: "all",
  users: [],
  editUser:null,
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.usersPage.SET_CURRENT_TYPE:
      return {
        ...state,
        currentType: action.payload.current,
      };
    case constants.usersPage.WRITE_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };
    case constants.usersPage.SET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};

export default usersPageReducer;
