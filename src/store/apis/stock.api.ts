// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DataDropDownStock } from "../../types/stock.type";
import adapterResponseStock from "../../adapters/stockResponse.adapter";
import { setStockData } from "../slices/stock.slice";
import { baseUrl, token } from "../../constants/api";

// Define a service using a base URL and expected endpoints
export const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      "X-Finnhub-Token": token,
    },
  }),
  endpoints: (builder) => ({
    getStock: builder.query<DataDropDownStock[] | undefined, any>({
      query: () => `stock/symbol?exchange=US`,
      transformResponse: adapterResponseStock,
      async onQueryStarted({ dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setStockData(res.data));
        } catch (resError) {
          console.log("Error", resError);
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStockQuery } = stockApi;
