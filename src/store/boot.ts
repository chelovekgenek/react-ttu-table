import { Dispatch } from "redux"

import { requestGetAll } from "./entities/employees"

export default (dispatch: Dispatch) =>
  new Promise(() => {
    dispatch(requestGetAll())
  })
