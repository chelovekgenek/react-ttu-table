import { TAppState } from "../reducers"

export const selectFetching = (state: TAppState): TAppState["employees"]["fetching"] => state.employees.fetching
export const selectData = (state: TAppState): TAppState["employees"]["data"] => state.employees.data
