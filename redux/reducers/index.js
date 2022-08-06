import { combineReducers } from "redux";
import reminderSettingsReducer from "./reminderSettingsReducer";

const rootReducer = combineReducers({ reminderSettingsReducer });

export default rootReducer;
