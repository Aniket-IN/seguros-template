import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { userReducer } from "./userSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const persistConfig = {
  key: 'redux-persist-root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  user: userReducer,
})


export default configureStore(
  {
    reducer: persistReducer(persistConfig, reducer),
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

