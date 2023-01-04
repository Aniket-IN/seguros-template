import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore
} from "redux-persist";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userReducer } from "./userSlice";
import { pageReducer } from "./pageSlice";


const persistConfig = {
  key: "redux-persist-root",
  version: 1,
  storage,
  blacklist: ["page"],
};

const reducer = combineReducers({
  user: userReducer,
  page: pageReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store


setupListeners(store.dispatch);

export const persistor = persistStore(store, {}, () => {
  persistor.persist();
});