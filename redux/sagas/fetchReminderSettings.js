import { call, put, takeLatest } from "redux-saga/effects";
import requests from "../../services/httpService";

function* handleGetReminderSettings() {
  try {
    const users = yield call(requests.get('/review-request/emails'));
    yield put({ type: "GET_USERS_SUCCESS", users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* watcherReminderSettingsSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetReminderSettings);
}

export default watcherReminderSettingsSaga;
