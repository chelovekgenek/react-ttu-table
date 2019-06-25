import React from "react"
import { ColumnProps } from "antd/lib/table"

export const getColumns = (): Array<ColumnProps<IApiEntityEmployee>> => [
  {
    title: "Date",
    key: "date",
    render: (record: IApiEntityEmployee) => {
      const d = new Date(Number(record.date) * 1000)
      return <span>{`${d.getDay() + 1}/${d.getMonth() + 1}/${d.getFullYear()}`}</span>
    },
    sorter: (a, b) => Number(a.date) - Number(b.date),
  },
  {
    title: "Time In/Out",
    key: "timeInOut",
    render: (record: IApiEntityEmployee) => <span>{`${record.timeIn} - ${record.timeOut}`}</span>,
  },
  {
    title: "Name",
    key: "name",
    render: (record: IApiEntityEmployee) => <span>{`${record.firstName} ${record.lastName}`}</span>,
    sorter: (a, b) => a.lastName.length - b.firstName.length, // TODO better sorting mechanism
  },
  {
    title: "Regular Hours",
    dataIndex: "regularHours",
    key: "regularHours",
    sorter: (a, b) => a.regularHours - b.regularHours,
  },
  {
    title: "Overtime Hours",
    dataIndex: "overtimeHours",
    key: "overtimeHours",
    sorter: (a, b) => a.overtimeHours - b.overtimeHours,
  },
  {
    key: "totalHours",
    title: "Total Hours",
    dataIndex: "totalHours",
    sorter: (a, b) => a.totalHours - b.totalHours,
  },
]
