import sc from "styled-components"

import { Grid, Select } from "components/UI"

export const ContainerRow = sc(Grid.Row)`
  height: 100%;
  margin-top: 5rem;
`
export const ContentRow = sc(Grid.Row)`
  margin: 1rem 0;
`

export const SelectTimePeriod = sc(Select)`
  &.ant-select {
    width: 8rem;
  }
`

export const SelectEmployee = sc(Select)`
  &.ant-select {
    width: 12rem;
  }
`
