import { constants } from "../const/constants";

const initialState = {
  currentUserid: null,
  error: "",
  userData: {},
  name: "",
  email: "",
  role: "",
  password: "",
  avatar: "",
  editName: "",
  editEmail: "",
  editRole: "",
  editAvatar: "",
  editPassword: "",
};

const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.newUserPage.SET_CURRENT_USER:
      return {
        ...state,
        currentUserid: action.payload.currenUserId,
      };
    case constants.newUserPage.GET_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        editName:action.payload.name,
        editEmail: action.payload.email,
        editRole: action.payload.role,
        editAvatar: action.payload.avatar,
        editPassword: action.payload.password
      };
    case constants.newUserPage.SET_NEW_USER:
      return {
        ...state,
        [action.payload.type]: action.payload.value,
      };
    case constants.newUserPage.GET_USER_FAILURE:
    case constants.newUserPage.DELETE_USER_SUCCESS:
    case constants.newUserPage.DELETE_USER_FAILURE:
    case constants.newUserPage.EDITE_USER_FAILURE:
    case constants.newUserPage.EDIT_PROFILE_FAILURE:
    case constants.auth.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case constants.auth.SIGNIN_SUCCESS:
      return {
        ...state,
        name: "",
        email: "",
        role: "",
        password: "",
        avatar: "",
        error:'',
      };
    case constants.newUserPage.EDITE_USER_SUCCESS:
      return {
        ...state,
      }

    default:
      return state;
  }
};
export default newUserReducer;
