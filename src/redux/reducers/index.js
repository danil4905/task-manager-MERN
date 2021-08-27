import { combineReducers } from "redux";
import alertReducer from "./alert-reducer";
import authReducer from "./auth-reducer";
import headerReducer from './header-reducer';
import InputsReducer from "./inputs-reduser";
import mainPageReducer from "./mainPage-reducer";
import newTaskPageReducer from "./newTaskPage-reducer";
import newUserReducer from './newUser-reducer';
import playerReducer from './player-reducer';
import tasksPageReducer from "./tasksPage-reducer";
import usersPageReducer from './usersPage-reducer';
import editTaskPageReducer from "./editTaskPage-reducer";


export let rootReducers = combineReducers({
  header: headerReducer,
  mainPage: mainPageReducer,
  player: playerReducer,
  usersPage: usersPageReducer,
  newUserPage: newUserReducer,
  tasksPage: tasksPageReducer,
  newTaskPage: newTaskPageReducer,
  editTaskPage: editTaskPageReducer,
  auth: authReducer,
  inputs: InputsReducer,
  alert: alertReducer,
});