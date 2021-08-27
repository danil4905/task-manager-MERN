import { constants } from "../const/constants";

export const writeSearch = (value) => ({
  type: constants.usersPage.WRITE_SEARCH,
  payload: {
    search: value,
  },
});
export const setUsers = (users) => ({
  type: constants.usersPage.SET_USERS,
  payload: {
    users: users,
  },
});
export const setCurrentType = (value) => ({
  type: constants.usersPage.SET_CURRENT_TYPE,
  payload: {
    current: value,
  },
});
