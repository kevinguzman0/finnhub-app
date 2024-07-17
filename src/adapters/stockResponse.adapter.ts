/* eslint-disable prettier/prettier */
import { DataDropDownStock, Stock } from "../types/stock.type";

const adapterResponseStock = (
  response: Stock[]
): DataDropDownStock[] | undefined => {
  return response.map((stock) => ({
    label: stock.description,
    value: stock.symbol,
  }));
};

export default adapterResponseStock;
