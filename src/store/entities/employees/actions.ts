import { createAction } from "redux-actions"

import { IGetAllSuccessPayload } from "./actions.types"

export enum E {
  EMPLOYEES__API__GET_ALL__REQUEST = "employees/api/getEmployees/request",
  EMPLOYEES__API__GET_ALL__SUCCESS = "employees/api/getEmployees/success",
  EMPLOYEES__API__GET_ALL__FAILURE = "employees/api/getEmployees/failure",
}

export const requestGetAll = createAction(E.EMPLOYEES__API__GET_ALL__REQUEST)
export const successGetAll = createAction<IGetAllSuccessPayload>(E.EMPLOYEES__API__GET_ALL__SUCCESS)
export const failureGetAll = createAction(E.EMPLOYEES__API__GET_ALL__FAILURE)
