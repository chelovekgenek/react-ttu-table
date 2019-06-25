import sc from "styled-components"

import { Grid } from "components/UI"

export const ContainerRow = sc(Grid.Row)`
  height: 100%;
  margin-top: 5rem;
`
export const ContentRow = sc(Grid.Row)`
  margin: 1rem 0;
`

export const SelectTimePeriodWrapper = sc.div`
  .ant-select {
    width: 8rem;
  }
`

export const SelectEmployeeWrapper = sc.div`
  .ant-select {
    width: 12rem;
  }
`
