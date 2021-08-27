import { constants } from "../const/constants";
import API from '../../utils/newApi';

export const changeEditTaskInput = (name = "dateExpired", value) => ({
  type: constants.editTaskPage.CHANGE_EDIT_TASK_INPUT,
  payload: {
    name: name,
    value: value,
  },
});

export const changeEditTaskDate = (value) => ({
  type: constants.editTaskPage.CHANGE_EDIT_TASK_DATE,
  payload: value,
});
export const editTaskRequest = (id,task) => {
  return (dispatch) => {
    API.put(
      "api/tasks/"+id,
      task,
      {
        "content-type": "multipart/form-data",
      }
    )
      .then((response) =>
        dispatch({
          type: constants.editTaskPage.EDIT_TASK_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: constants.editTaskPage.EDIT_TASK_FAILURE,
          payload: error,
        })
      );
  };
}