import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AlertStock, DataDropDownStock, Stock } from "../../types/stock.type";

const initialState = {
  data: [] as DataDropDownStock[],
  alerts: [] as AlertStock[],
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStockData: (state, action: PayloadAction<Stock[]>) => {
      const dataDropDown: DataDropDownStock[] = action.payload.map((item) => ({
        label: item.description,
        value: item.description,
      }));

      state.data = dataDropDown;
    },
    setAlertStock: (state, action: PayloadAction<AlertStock>) => {
      state.alerts.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStockData, setAlertStock } = stockSlice.actions;

export default stockSlice.reducer;
