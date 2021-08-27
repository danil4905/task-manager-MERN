import { constants } from "../const/constants";
import axios from "axios";
import { setUser, failLogin,successRegister,failRegister } from "../reducers/auth-reducer";

export const register = (user) => {
  return async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      user,
      {
        "content-type": "multipart/form-data",
      }
    );
    dispatch(successRegister());
    alert(response.data.message);
    console.log(response);
  } catch (e) {
    if(e.response.data.errors) dispatch(failRegister(e.response.data.errors.errors[0].msg));
    else dispatch(failRegister(e.response.data.message));
  }
};
}
export const Login = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch(failLogin(e.response.data.message));
    }
  };
};
export const Auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch(failLogin(e.response.data.message));
      localStorage.removeItem("token");
    }
  };
};
export const Logout = () => ({
  type: constants.auth.LOGOUT,
});
export const changeInput = (name, value) => ({
  type: constants.auth.CHANGE_INPUT_PROFILE,
  payload: {
    name: name,
    value: value,
  },
});
