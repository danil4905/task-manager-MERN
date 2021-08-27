import { constants } from "../const/constants";

const INITIAL_STATE = {
  id: "",
  name: "",
  type: "",
  description: "",
  author: "",
  executor: "",
  dateExpired: "",
  error: "",
};

const editTaskPageReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
      case constants.editTaskPage.CHANGE_EDIT_TASK_INPUT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case constants.editTaskPage.CHANGE_EDIT_TASK_DATE:
      case constants.editTaskPage.EDIT_TASK_FAILURE:
        return {
          ...state,
          dateExpired: action.payload,
        };
      default:
        return state
    }
}
export default editTaskPageReducer;