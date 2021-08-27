import { constants } from "../const/constants";

export const togglePhotoButton = () => ({ type: constants.mainPage.TOGGLE_PHOTO_BUTTON });
export const toggleAudioButton = () => ({ type: constants.mainPage.TOGGLE_AUDIO_BUTTON });
export const toggleVideoButton = () => ({ type: constants.mainPage.TOGGLE_VIDEO_BUTTON });
export const closeModal = () => ({ type: constants.mainPage.CLOSE_MODAL });
export const writeMainSearchInput = (inputValue) => ({
  type: constants.mainPage.WRITE_SEARCH,
  option: inputValue,
});
export const writeMainDateInput = (inputValue) => ({
  type: constants.mainPage.WRITE_DATE,
  option: inputValue,
});

export const openModal = (
  modalType,
  modalPreview,
  modalTitle,
  modalTime,
  modalLength
) => ({
  type: constants.mainPage.OPEN_MODAL,
  option: {
    modalType: modalType,
    modalPreview: modalPreview,
    modalTitle: modalTitle,
    modalTime: modalTime,
    modalLength: modalLength,
  },
});