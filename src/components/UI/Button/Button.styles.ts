import { Button as AntButton } from "antd"
import sc from "styled-components"

export const Button = sc(AntButton)`
  background-color: #FF7A00;
  color: white;
  border: none;
  font-weight: 400;
  font-size: 18px;

  &:hover {
    color: gray
    background-color: #FF9A00;
  }
`
