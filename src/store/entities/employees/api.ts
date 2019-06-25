import { request } from "helpers"

export const getAll = async () => request.get("/api/employees")
