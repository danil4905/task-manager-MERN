import { constants } from "../const/constants";

const INITIAL_STATE = {
  isLogined: false,
  errorMessage: "",
  user: {},
  email:'',
  name:'',
  avatar:'',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.auth.LOGIN_SUCCESS:
      return {
        ...state,
        isLogined: true,
        user: action.payload,
        email: action.payload.email,
        name: action.payload.name,
        avatar:action.payload.avatar,
        errorMessage:'',
      };
    case constants.auth.LOGIN_FAILURE:
      return {
        ...state,
        isLogined: false,
        errorMessage: action.payload,
      };
    case constants.auth.LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isLogined: false,
        user: {},
      };
    }
    case constants.auth.CHANGE_INPUT_PROFILE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
export const setUser = (user) => ({
  type: constants.auth.LOGIN_SUCCESS,
  payload: user,
});
export const failLogin = (error) => ({
  type: constants.auth.LOGIN_FAILURE,
  payload: error,
});
export const failRegister = (error) => ({
  type:constants.auth.SIGNIN_FAILURE,
  payload:error,
});
export const successRegister = () => ({
  type:constants.auth.SIGNIN_SUCCESS,
})
export default authReducer;
