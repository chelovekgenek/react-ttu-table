import { combineReducers } from "redux"

import { reducer as employees } from "./employees"

export const reducers = combineReducers({
  employees,
})

export type TAppState = ReturnType<typeof reducers>
