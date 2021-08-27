import { constants } from "../const/constants";

export const closeAlert = () => ({type:constants.alert.CLOSE_ALERT})
export const openAlert =(name) => ({type:constants.alert.OPEN_ALERT,payload:name})