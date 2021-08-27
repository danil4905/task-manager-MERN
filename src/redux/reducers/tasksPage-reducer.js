import { constants } from "../const/constants";

const INITIAL_STATE = {
  videoActiveTask: false,
  audioActiveTask: false,
  photoActiveTask: false,
  searchInput: "",
  dateInput: "",
  selectInput:"",
};

const tasksPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.tasksPage.TOGGLE_AUDIO_BUTTON_TASK:
      return {
        ...state,
        audioActiveTask: !state.audioActiveTask,
      };
    case constants.tasksPage.TOGGLE_PHOTO_BUTTON_TASK:
      return {
        ...state,
        photoActiveTask: !state.photoActiveTask,
      };
    case constants.tasksPage.TOGGLE_VIDEO_BUTTON_TASK:
      return {
        ...state,
        videoActiveTask: !state.videoActiveTask,
      };
    case constants.tasksPage.WRITE_DATE_TASK:
      return {
        ...state,
        dateInput: action.payload,
      };
    case constants.tasksPage.WRITE_SEARCH_TASK:
      return {
        ...state,
        searchInput: action.payload,
      };
    case constants.tasksPage.WRITE_SELECT_TASK:
      return {
        ...state,
        selectInput:action.payload,
      }

    default:
      return state;
  }
};
export default tasksPageReducer;
