import { constants } from "../const/constants";

const initialState = {
        searchInputMainPage: '',
        dateInputMainPage: '',
        searchInputUsersPage: '',
        loginAuth:'',
        passwordAuth:'',
}

const InputsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.inputs.CHANGE_INPUT:
            return {
                ...state,
                [action.payload.type]: action.payload.value
            }
        default:
            return state;
    }
}
export default InputsReducer;