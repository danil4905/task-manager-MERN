import { constants } from "../const/constants";

const initialState = {
  videoActive: false,
  audioActive: false,
  photoActive: false,
  searchInput: "",
  dateInput: "",
  isModalOpen: false,
  modalType: null,
  modalTitle: null,
  modalTime: null,
  modalLength: null,
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.mainPage.TOGGLE_AUDIO_BUTTON:
      return {
        ...state,
        audioActive: !state.audioActive,
      };
    case constants.mainPage.TOGGLE_VIDEO_BUTTON:
      return {
        ...state,
        videoActive: !state.videoActive,
      };
    case constants.mainPage.TOGGLE_PHOTO_BUTTON:
      return {
        ...state,
        photoActive: !state.photoActive,
      };
    case constants.mainPage.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalType: null,
        modalPreview: null,
        modalTime: null,
        modalTitle: null,
        modalLength: null,
      };
    case constants.mainPage.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalType: action.option.modalType,
        modalPreview: action.option.modalPreview,
        modalTitle: action.option.modalTitle,
        modalTime: action.option.modalTime,
        modalLength: action.option.modalLength,
      };
    case constants.mainPage.WRITE_DATE:
      return {
        ...state,
        dateInput: action.option,
      };
    case constants.mainPage.WRITE_SEARCH:
      return {
        ...state,
        searchInput: action.option,
      };
    default:
      return state;
  }
};
export default mainPageReducer;
