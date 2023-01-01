import React from 'react'
import store from "@/redux/store"
import { Provider } from "react-redux"
import { Toaster } from "react-hot-toast"

const AppLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
      {children}
    </Provider>
  )
}

export default AppLayout