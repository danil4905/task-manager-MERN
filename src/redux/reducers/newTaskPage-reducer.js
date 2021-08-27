import { constants } from "../const/constants";

const INITIAL_STATE = {
  name: "",
  type: "",
  description: "",
  author: "",
  executor: "",
  dateExpired: "",
};

const newTaskPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.newTaskPage.CHANGE_NEW_TASK_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case constants.newTaskPage.CHANGE_NEW_TASK_DATE:
        return {
            ...state,
            dateExpired:action.payload
        }

    default:
      return state;
  }
};

export default newTaskPageReducer;
