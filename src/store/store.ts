import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import { isProduction } from "helpers"

import { reducers, sagas } from "./entities"
import boot from "./boot"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const store = createStore(
  reducers,
  isProduction ? applyMiddleware(...middlewares) : composeWithDevTools(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(sagas)

boot(store.dispatch)
