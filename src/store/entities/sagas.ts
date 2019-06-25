import { all, fork } from "redux-saga/effects"

import { watcher as watcherImages } from "./employees"

export function* sagas() {
  yield all([fork(watcherImages)])
}
