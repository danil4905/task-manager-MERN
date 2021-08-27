import { constants } from "../const/constants";

const INITIAL_STATE = {
    isOpenedUser:false,
    isOpenedTask:false,
}

const alertReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.alert.OPEN_ALERT:
            
            return {
              ...state,
              [action.payload]: true,
            };
        case constants.alert.CLOSE_ALERT:
            return {
              ...state,
              isOpenedUser: false,
              isOpenedTask: false,
            };
    
        default:
            return state;
    }
}


export default alertReducer;