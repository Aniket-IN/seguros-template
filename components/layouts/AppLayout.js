import React from 'react'
import store from "@/redux/store"
import { Provider } from "react-redux"


const AppLayout = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default AppLayout