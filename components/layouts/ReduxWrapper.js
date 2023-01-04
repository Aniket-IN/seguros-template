import React from "react";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const ReduxWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxWrapper;
