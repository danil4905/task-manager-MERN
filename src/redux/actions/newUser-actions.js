import { constants } from "../const/constants";
import API from "../../utils/newApi";

export const setEditUserId = (id) => ({
  type: constants.newUserPage.SET_CURRENT_USER,
  payload: {
    currenUserId: id,
  },
});
export const changeUser = (key, value) => ({
  type: constants.newUserPage.CHANGE_USER,
  payload: {
    key: key,
    value: value,
  },
});
export const changeNewUser = (nameInput, value) => ({
  type: constants.newUserPage.SET_NEW_USER,
  payload: {
    type: nameInput,
    value: value,
  },
});
export const getUser = (id) => {
  return (dispatch) => {
    API.get("/api/users/" + id)
      .then((response) =>
        dispatch({
          type: constants.newUserPage.GET_USER_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: constants.newUserPage.GET_USER_FAILURE,
          payload: error,
        })
      );
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    API.delete("/api/users/" + id)
      .then((response) =>
        dispatch({
          type: constants.newUserPage.DELETE_USER_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: constants.newUserPage.DELETE_USER_FAILURE,
          payload: error,
        })
      );
  };
};
export const editProfile = (id,user) => {
  return (dispatch) => {
    API.patch(
      "api/users/" + id,
      user,
      {
        "content-type": "multipart/form-data",
      }
    )
      .then((response) =>
        dispatch({
          type: constants.newUserPage.EDIT_PROFILE_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: constants.newUserPage.EDIT_PROFILE_FAILURE,
          payload: error,
        })
      );
  };
};
export const editUser = (user) => {
  for (var [key, value] of user.entries()) {
    console.log(key, value);
  }
  return (dispatch) => {
    API.put("api/users", user, {
      "content-type": "multipart/form-data",
    })
      .then((response) =>
        dispatch({
          type: constants.newUserPage.EDITE_USER_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: constants.newUserPage.EDITE_USER_FAILURE,
          payload: error,
        })
      );
  }
}
