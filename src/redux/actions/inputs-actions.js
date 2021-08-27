import { constants } from "../const/constants";

export const changeInput = (type, value) => ({
  type: constants.inputs.CHANGE_INPUT,
  payload: { type: type, value: value },
});
