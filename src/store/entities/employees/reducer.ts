import { handleActions } from "redux-actions"

import { E, successGetAll } from "./actions"

export interface IState {
  fetching: boolean
  data: Array<IApiEntityEmployee>
}

const initialState: IState = {
  fetching: false,
  data: [],
}

export const reducer = handleActions(
  {
    [E.EMPLOYEES__API__GET_ALL__REQUEST]: state => ({
      ...state,
      fetching: true,
    }),
    [E.EMPLOYEES__API__GET_ALL__SUCCESS]: (state, { payload }: ReturnType<typeof successGetAll>) => ({
      ...state,
      fetching: false,
      data: payload,
    }),
    [E.EMPLOYEES__API__GET_ALL__FAILURE]: state => ({
      ...state,
      fetching: false,
    }),
  },
  initialState,
)
