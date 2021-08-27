import { constants } from "../const/constants";

let initialState = {
  currentTime: 0,
  playing: false,
  muted: false,
  volume: 5,
  fullscreen: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.player.SET_MUTED:
      return {
        ...state,
        muted: action.option.muted,
      };
    case constants.player.SET_FULLSCREEN:
      return {
        ...state,
        fullscreen: !state.fullscreen,
      };
    case constants.player.SET_VOLUME:
      return {
        ...state,
        volume: action.option.volume,
      };
    case constants.player.TOGGLE_PLAY:
      return {
        ...state,
        playing: !state.playing,
      };
    default:
      return state;
  }
};
export default playerReducer;
