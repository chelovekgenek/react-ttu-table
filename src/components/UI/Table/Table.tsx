import React from "react"
import { Table as AntTable } from "antd"
import { TableProps } from "antd/lib/table"

interface IProps<T> extends TableProps<T> {}

export class Table<T> extends React.PureComponent<IProps<T>> {
  render() {
    return <AntTable<T> {...this.props} />
  }
}
