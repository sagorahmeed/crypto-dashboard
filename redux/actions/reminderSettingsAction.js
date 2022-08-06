import { REMINDER_SETTINGS_REQUESTS, REMINDER_SETTINGS_SUCCESS } from "../../constants/reminderSettingsConstants";

export const getReminderSettingsRequest = () => ({
  type: REMINDER_SETTINGS_REQUESTS
});

export const getReminderSettingsSuccess = (payload) => ({
  type: REMINDER_SETTINGS_SUCCESS,
  payload
});
