import React from "react"
import { connect } from "react-redux"

import { Table, Grid } from "components/UI"
import { selectFetching, selectData } from "store/entities/employees"

import { RowWithStyles } from "./MainLayout.styles"
import { TAppState } from "store/entities"

import { getColumns } from "./Table.columns"

const { Col } = Grid

interface IStateProps {
  fetching: ReturnType<typeof selectFetching>
  data: ReturnType<typeof selectData>
}
interface IProps extends IStateProps {}

export const MainLayout: React.FC<IProps> = ({ fetching, data }) => (
  <React.Fragment>
    <RowWithStyles type="flex" justify="center" align="middle">
      <Col lg={16} xs={22}>
        <Table<IApiEntityEmployee>
          loading={fetching}
          dataSource={data}
          columns={getColumns()}
          pagination={false}
          rowKey={record => record.id}
        />
      </Col>
    </RowWithStyles>
  </React.Fragment>
)

export default connect((state: TAppState) => ({
  fetching: selectFetching(state),
  data: selectData(state),
}))(MainLayout)
