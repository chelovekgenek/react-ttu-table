import React from "react"
import { connect } from "react-redux"
import { get } from "lodash"

import { Table, Grid, Button, Select, DatePicker } from "components/UI"
import { selectFetching, selectData } from "store/entities/employees"
import { TAppState } from "store/entities"

import { getColumns, timeOptions } from "./helpers"
import { ContainerRow, ContentRow, SelectTimePeriodWrapper, SelectEmployeeWrapper } from "./MainLayout.styles"
import { RangePickerValue } from "antd/lib/date-picker/interface"
import { saveFile } from "helpers"

const { Col, Row } = Grid
const { Option } = Select
const { RangePicker } = DatePicker

interface IStateProps {
  fetching: ReturnType<typeof selectFetching>
  data: ReturnType<typeof selectData>
}
interface IProps extends IStateProps {}

interface IState {
  data: IProps["data"]
  filters: {
    months?: RangePickerValue
    time?: string
    employee?: number
  }
}

export class MainLayout extends React.PureComponent<IProps, IState> {
  state: IState = {
    data: [],
    filters: {
      months: [],
      time: timeOptions[0].value,
      employee: undefined,
    },
  }
  UNSAFE_componentWillReceiveProps(nextProps: IProps) {
    this.setState({ data: nextProps.data })
  }

  render() {
    const { fetching } = this.props
    const { data, filters } = this.state

    return (
      <React.Fragment>
        <ContainerRow type="flex" justify="center">
          <Col lg={16} xs={22}>
            <Row>
              <h1>Staff Timecards</h1>
            </Row>
            <ContentRow type="flex" justify="space-between">
              <Col span={14}>
                <Row type="flex" justify="space-between">
                  <RangePicker
                    placeholder={["Start month", "End month"]}
                    format="MMM. YYYY"
                    mode={["month", "month"]}
                    value={filters.months}
                    onPanelChange={this.setFilter("months")}
                  />
                  <SelectTimePeriodWrapper>
                    <Select value={filters.time} onChange={this.setFilter("time")}>
                      {timeOptions.map(item => (
                        <Option key={item.value} value={item.value}>
                          {item.title}
                        </Option>
                      ))}
                    </Select>
                  </SelectTimePeriodWrapper>
                  <SelectEmployeeWrapper>
                    <Select
                      showSearch
                      allowClear
                      placeholder="All employees"
                      filterOption={(input, option) =>
                        get(option, "props.children", "")
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      value={filters.employee}
                      onChange={this.handleEmployeeChange}
                    >
                      {this.props.data.map(item => (
                        <Option key={item.id} value={item.id}>{`${item.firstName} ${item.lastName}`}</Option>
                      ))}
                    </Select>
                  </SelectEmployeeWrapper>
                </Row>
              </Col>
              <Col>
                <Button icon="download" onClick={this.handleExportClick}>
                  Export
                </Button>
              </Col>
            </ContentRow>
            <Row>
              <Table<IApiEntityEmployee>
                loading={fetching}
                dataSource={data}
                columns={getColumns()}
                pagination={false}
                rowKey={r => String(r.id)}
              />
            </Row>
          </Col>
        </ContainerRow>
      </React.Fragment>
    )
  }

  setFilter = (key: keyof IState["filters"]) => (v: any) =>
    this.setState(s => ({ filters: { ...s.filters, [key]: v } }))

  handleEmployeeChange = (v?: number) =>
    this.setState(s => ({
      data: v ? s.data.filter(item => item.id === v) : this.props.data,
      filters: { ...s.filters, employee: v },
    }))

  handleExportClick = () => {
    const { data } = this.state

    saveFile("export.json", data)
  }
}

export default connect((state: TAppState) => ({
  fetching: selectFetching(state),
  data: selectData(state),
}))(MainLayout)
