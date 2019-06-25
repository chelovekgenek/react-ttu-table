import React from "react"

import { GlobalStyles } from "./App.styles"
import { MainLayout } from "components/MainLayout"

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <MainLayout />
    </React.Fragment>
  )
}
