import { all } from 'redux-saga/effects';
import watcherReminderSettingsSaga from './fetchReminderSettings';

// function* workGetUsersFetch() {
//   const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
//   const users = yield response.json();
//   yield put(getUsersSuccess(users));
// }

function* rootSaga() {
  yield all([watcherReminderSettingsSaga()]);
}

export default rootSaga;
