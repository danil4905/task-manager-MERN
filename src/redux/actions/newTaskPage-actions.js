import { constants } from "../const/constants";
import API from '../../utils/newApi';

export const changeNewTaskInput = (name='dateExpired',value) => ({
    type: constants.newTaskPage.CHANGE_NEW_TASK_INPUT,
    payload: {
        name:name,
        value: value
    }
})

export const changeNewTaskDate = (value) => ({
    type:constants.newTaskPage.CHANGE_NEW_TASK_DATE,
    payload: value,
})

export const createNewTask = (task) => {
    return (dispatch) => {
      API.post(
        "api/tasksUpload",
        task,
        {
          "content-type": "multipart/form-data",
        }
      )
        .then((response) =>
          dispatch({
            type: constants.newTaskPage.CREATE_NEW_TASK_SUCCESS,
            payload: response.data,
          })
        )
        .catch((error) =>
          dispatch({
            type: constants.newTaskPage.CREATE_NEW_TASK_FAILURE,
            payload: error,
          })
        );
    };
  };