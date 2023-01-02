import React from 'react'
import store from "@/redux/store"
import { Provider } from "react-redux"
import { Toaster } from "react-hot-toast"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

const AppLayout = ({ children }) => {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster
          position="bottom-right"
          reverseOrder={true}
        />
        {children}
      </PersistGate>
    </Provider>
  )
}

export default AppLayout