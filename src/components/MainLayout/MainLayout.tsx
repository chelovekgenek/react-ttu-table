import React from "react"
import { connect } from "react-redux"
import moment, { Moment } from "moment"

import { Table, Grid, Button } from "components/UI"
import { selectFetching, selectData } from "store/entities/employees"
import { TAppState } from "store/entities"

import { getColumns, timeOptions, ETimeOptions } from "./helpers"
import { ContainerRow, ContentRow } from "./MainLayout.styled"
import { RangePickerValue } from "antd/lib/date-picker/interface"
import { saveFile } from "helpers"
import { Filters } from "./Filters"

const { Col, Row } = Grid

interface IStateProps {
  fetching: ReturnType<typeof selectFetching>
  data: ReturnType<typeof selectData>
}
interface IProps extends IStateProps {}

export interface IState {
  data: IProps["data"]
  filters: {
    months?: RangePickerValue
    time?: string | unknown
    employee?: number | unknown
  }
}

const initialState = {
  data: [],
  filters: {
    months: [],
    time: timeOptions[0].value,
    employee: undefined,
  },
}

export class MainLayout extends React.PureComponent<IProps, IState> {
  state: IState = initialState
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
              <Col span={10}>
                <Filters
                  filters={filters}
                  onMonthsChange={this.handleMonthsChange}
                  onTimeChange={this.handleTimeChange}
                  onEmployeeChange={this.handleEmployeeChange}
                  options={{
                    time: timeOptions,
                    employee: this.props.data.map(item => ({
                      children: `${item.firstName} ${item.lastName}`,
                      value: String(item.id),
                    })),
                  }}
                />
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

  handleMonthsChange = (v?: RangePickerValue) => {
    if (!v) return
    const [from, to] = v
    this.setState(s => ({
      data:
        from && to
          ? s.data.filter(({ date }) => moment(date).isBetween(v[0] as Moment, v[1] as Moment))
          : this.props.data,
      filters: { ...initialState.filters, months: v },
    }))
  }
  handleTimeChange = (v: unknown) => {
    const { data } = this.state
    const set = (data: IProps["data"]) => this.setState(s => ({ data, filters: { ...initialState.filters, time: v } }))
    switch (v) {
      case ETimeOptions.ALL_DAYS:
        return set(data)
      case ETimeOptions.CURR_DAY:
        return set(data.filter(({ date }) => moment(date).isBetween(moment().startOf("day"), moment().endOf("day"))))
      case ETimeOptions.CURR_MONTH:
        return set(
          data.filter(({ date }) => moment(date).isBetween(moment().startOf("month"), moment().endOf("month"))),
        )
      case ETimeOptions.NEXT_7_DAYS:
        return set(data.filter(({ date }) => moment(date).isBetween(moment(), moment().add(7, "days"))))
      case ETimeOptions.PREV_7_DAYS:
        return set(
          data.filter(({ date }) => moment(date).isBetween(moment().startOf("month"), moment().subtract(7, "days"))),
        )
      default:
        set(data)
    }
  }
  handleEmployeeChange = (v: unknown) =>
    this.setState(s => ({
      data: v ? s.data.filter(item => item.id === v) : this.props.data,
      filters: { ...initialState.filters, employee: v },
    }))

  handleExportClick = () => saveFile("export.json", this.state.data)
}

export default connect((state: TAppState) => ({
  fetching: selectFetching(state),
  data: selectData(state),
}))(MainLayout)
