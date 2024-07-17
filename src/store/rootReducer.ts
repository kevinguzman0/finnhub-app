import { combineReducers } from "@reduxjs/toolkit";

import stockReducer from "./slices/stock.slice";
import userReducer from "./slices/user.slice";
import { stockApi } from "./apis/stock.api";

export type RootState = ReturnType<typeof combineReducers>;

export default combineReducers({
  stock: stockReducer,
  user: userReducer,
  [stockApi.reducerPath]: stockApi.reducer,
});
