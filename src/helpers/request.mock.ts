import { AxiosInstance } from "axios"
import MockAdapter from "axios-mock-adapter"

import employees from "mocks/employees.json"

export const setupMocks = (request: AxiosInstance) => {
  const mock = new MockAdapter(request)

  mock.onGet("/api/employees").reply(200, employees)
}
