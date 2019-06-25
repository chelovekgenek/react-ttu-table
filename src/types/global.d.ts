type TKey = string

declare interface IReduxNormalizedDataState<T> {
  byId: Object<{ [key: TKey]: T }>
  allIds: Array<TKey>
}

interface IApiEntityEmployee {
  id: number
  firstName: string
  lastName: string
  email: string
  date: string
  timeIn: string
  timeOut: string
  regularHours: number
  overtimeHours: number
  totalHours: number
}
