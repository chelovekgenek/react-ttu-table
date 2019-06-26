import React from "react"
import { get } from "lodash"

import { Grid, Select, DatePicker } from "components/UI"
import { IState } from "./MainLayout"
import { SelectTimePeriod, SelectEmployee } from "./Filters.styled"
import { RangePickerValue } from "antd/lib/date-picker/interface"
import { OptionProps } from "antd/lib/mentions"

const { Row } = Grid
const { Option } = Select
const { RangePicker } = DatePicker

interface IProps {
  filters: IState["filters"]
  options: {
    time: OptionProps[]
    employee: OptionProps[]
  }
  onMonthsChange: (v?: RangePickerValue) => void
  onTimeChange: (v: unknown) => void
  onEmployeeChange: (v: unknown) => void
}

export const Filters: React.FC<IProps> = ({ filters, options, onMonthsChange, onTimeChange, onEmployeeChange }) => {
  return (
    <Row type="flex" justify="space-between">
      <RangePicker
        allowClear
        placeholder={["Start month", "End month"]}
        format="MMM. YYYY"
        mode={["month", "month"]}
        value={filters.months}
        onChange={onMonthsChange}
        onPanelChange={onMonthsChange}
      />
      <SelectTimePeriod value={filters.time} onChange={onTimeChange} allowClear>
        {options.time.map(item => (
          <Option key={item.value} value={item.value}>
            {item.children}
          </Option>
        ))}
      </SelectTimePeriod>
      <SelectEmployee
        showSearch
        allowClear
        placeholder="All employees"
        filterOption={(input, option) =>
          get(option, "props.children", "")
            .toLowerCase()
            .indexOf(input.toLowerCase()) >= 0
        }
        value={filters.employee}
        onChange={onEmployeeChange}
      >
        {options.employee.map(item => (
          <Option key={item.value} value={item.value}>
            {item.children}
          </Option>
        ))}
      </SelectEmployee>
    </Row>
  )
}
