import { constants } from "../const/constants";

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