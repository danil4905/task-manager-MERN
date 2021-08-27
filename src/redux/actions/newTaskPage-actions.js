import { constants } from "../const/constants";

export const changeNewTaskInput = (name='dateExpired',value) => ({
    type: constants.newTaskPage.CHANGE_NEW_TASK_INPUT,
    payload: {
        name:name,
        value: value
    }
})

export const changeNewTaskDate = (value) => ({
    type:constants.newTaskPage.CHANGE_NEW_TASK_DATE,
    payload: value,
})