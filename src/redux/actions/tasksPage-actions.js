import { constants } from "../const/constants";
import API from '../../utils/newApi';

export const togglePhotoButtonTask = () => ({ type: constants.tasksPage.TOGGLE_PHOTO_BUTTON_TASK });
export const toggleAudioButtonTask = () => ({ type: constants.tasksPage.TOGGLE_AUDIO_BUTTON_TASK });
export const toggleVideoButtonTask = () => ({ type: constants.tasksPage.TOGGLE_VIDEO_BUTTON_TASK });
export const writeSearchInputTask = (inputValue) => ({
  type: constants.tasksPage.WRITE_SEARCH_TASK,
  payload: inputValue,
});
export const writeDateInputTask = (inputValue) => ({
  type: constants.tasksPage.WRITE_DATE_TASK,
  payload: inputValue,
});
export const writeSelectTask = (inputValue) => ({
  type:constants.tasksPage.WRITE_SELECT_TASK,
  payload:inputValue,
})
export const deleteTask = (id) => {
  return (dispatch) => {
    API.delete("/api/tasks/" + id)
      .then((response) =>
        dispatch({
          type: constants.tasksPage.DELETE_TASK_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: constants.tasksPage.DELETE_TASK_FAILURE,
          payload: error,
        })
      );
  };
};