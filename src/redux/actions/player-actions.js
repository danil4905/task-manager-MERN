import { constants } from "../const/constants";

export const setMuted = (value) => ({ type: constants.player.SET_MUTED,option: { muted: value, }, });
export const setFullscreen = () => ({ type: constants.player.SET_FULLSCREEN });
export const changeVolume = (level) => ({
  type: constants.player.SET_VOLUME,
  option: { volume: level, },
});
export const togglePlay = () => ({ type: constants.player.TOGGLE_PLAY });
