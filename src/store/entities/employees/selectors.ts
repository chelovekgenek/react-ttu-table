import { TAppState } from "../reducers"

export const selectFetching = (state: TAppState): TAppState["employees"]["fetching"] => state.employees.fetching
