import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getReminderSettingsSuccess } from "../actions/reminderSettingsAction";
import { types } from "../types";

function* asyncFetchRequest(action) {
  try {
    const url = `https://reqres.in/api/users/${action.payload}`;
    const response = yield call(() => axios.get(url));
    console.log(response);
    yield put(getReminderSettingsSuccess(response));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncFetchRequest);
}
