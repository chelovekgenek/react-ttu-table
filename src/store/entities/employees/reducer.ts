import { handleActions } from "redux-actions"

import { E } from "./actions"

export interface IState {
  fetching: boolean
  // data: IFlickrNormalizedPhotos
  // pagination: IFlickrPagination
}

const initialState: IState = {
  fetching: false,
}

export const reducer = handleActions(
  {
    [E.EMPLOYEES__API__GET_ALL__REQUEST]: state => ({
      ...state,
      fetching: true,
    }),
  },
  initialState,
)
