import React from "react"
import { Provider } from "react-redux"

import { MainLayout } from "components/MainLayout"
import { store } from "store"

import { GlobalStyles } from "./App.styled"

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <MainLayout />
      <App />
    </Provider>
  )
}
