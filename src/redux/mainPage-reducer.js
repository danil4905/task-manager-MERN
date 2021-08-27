const TOGGLE_AUDIO_BUTTON = "TOGGLE_AUDIO_BUTTON";
const TOGGLE_VIDEO_BUTTON = "TOGGLE_VIDEO_BUTTON";
const TOGGLE_PHOTO_BUTTON = "TOGGLE_PHOTO_BUTTON";
const CLOSE_MODAL = "CLOSE_MODAL";
const OPEN_MODAL = "OPEN_MODAL";
const WRITE_SEARCH = "WRITE_SEARCH";
const WRITE_DATE = "WRITE_DATE";

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
    case TOGGLE_AUDIO_BUTTON:
      return {
        ...state,
        audioActive: !state.audioActive,
      };
    case TOGGLE_VIDEO_BUTTON:
      return {
        ...state,
        videoActive: !state.videoActive,
      };
    case TOGGLE_PHOTO_BUTTON:
      return {
        ...state,
        photoActive: !state.photoActive,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalType: null,
        modalPreview: null,
        modalTime: null,
        modalTitle: null,
        modalLength: null,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalType: action.option.modalType,
        modalPreview: action.option.modalPreview,
        modalTitle: action.option.modalTitle,
        modalTime: action.option.modalTime,
        modalLength: action.option.modalLength,
      };
    case WRITE_DATE:
      return {
        ...state,
        dateInput: action.option,
      };
    case WRITE_SEARCH:
      return {
        ...state,
        searchInput: action.option,
      };
    default:
      return state;
  }
};

export const togglePhotoButton = () => ({ type: TOGGLE_PHOTO_BUTTON });
export const toggleAudioButton = () => ({ type: TOGGLE_AUDIO_BUTTON });
export const toggleVideoButton = () => ({ type: TOGGLE_VIDEO_BUTTON });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const writeMainSearchInput = (inputValue) => ({
  type: WRITE_SEARCH,
  option: inputValue,
});
export const writeMainDateInput = (inputValue) => ({
  type: WRITE_DATE,
  option: inputValue,
});

export const openModal = (
  modalType,
  modalPreview,
  modalTitle,
  modalTime,
  modalLength
) => ({
  type: OPEN_MODAL,
  option: {
    modalType: modalType,
    modalPreview: modalPreview,
    modalTitle: modalTitle,
    modalTime: modalTime,
    modalLength: modalLength,
  },
});

export default mainPageReducer;
