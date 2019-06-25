import { takeEvery, call } from "redux-saga/effects"

import * as api from "./api"
import { E } from "./actions"

function* handleGetAll() {
  try {
    yield call(api.getAll)
  } catch (e) {
    console.error(e)
  }
}

export function* watcher() {
  yield takeEvery(E.EMPLOYEES__API__GET_ALL__REQUEST, handleGetAll)
}
