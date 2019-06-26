import React from "react"
import { ColumnProps } from "antd/lib/table"
import moment from "moment"

export const getColumns = (): Array<ColumnProps<IApiEntityEmployee>> => [
  {
    title: "Date",
    key: "date",
    render: (record: IApiEntityEmployee) => <span>{moment(record.date).format("DD/MM/YYYY")}</span>,
    sorter: (a, b) => moment(a.date).valueOf() - moment(b.date).valueOf(),
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

export const ETimeOptions = {
  ALL_DAYS: "all days",
  CURR_DAY: "current day",
  PREV_7_DAYS: "prev 7 days",
  NEXT_7_DAYS: "next 7 days",
  CURR_MONTH: "current month",
}

export const timeOptions = [
  {
    children: "All days",
    value: ETimeOptions.ALL_DAYS,
  },
  {
    children: "Current day",
    value: ETimeOptions.CURR_DAY,
  },
  {
    children: "Prev 7 days",
    value: ETimeOptions.PREV_7_DAYS,
  },
  {
    children: "Next 7 days",
    value: ETimeOptions.NEXT_7_DAYS,
  },
  {
    children: "Current month",
    value: ETimeOptions.CURR_MONTH,
  },
]
