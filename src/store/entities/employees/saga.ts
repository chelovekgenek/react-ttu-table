import { takeEvery, call, put } from "redux-saga/effects"

import * as api from "./api"
import { E, successGetAll } from "./actions"

function* handleGetAll() {
  try {
    const { data } = yield call(api.getAll)
    yield put(successGetAll(data))
  } catch (e) {
    console.error(e)
  }
}

export function* watcher() {
  yield takeEvery(E.EMPLOYEES__API__GET_ALL__REQUEST, handleGetAll)
}
