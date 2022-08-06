import { REMINDER_SETTINGS_SUCCESS } from "../../constants/reminderSettingsConstants";

const reminderSettingsReducer = (state = {}, action) => {
  switch (action.type) {
    case REMINDER_SETTINGS_SUCCESS:
      return {
        ...state,
        reminderSettings: action.payload
      };
    default:
      return state;
  }
};

export default reminderSettingsReducer;
