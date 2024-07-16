export type Stock = {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  isin: string;
  mic: string;
  shareClassFIGI: string;
  symbol: string;
  symbol2: string;
  type: string;
};

export type DataDropDownStock = {
  label: string;
  value: string;
};

export type AlertStock = {
  symbol: string;
  price: string;
};

export type DataBoxStock = {
  name: string;
  price: number;
  percentage: number;
  value: number;
};
