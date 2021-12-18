import { createSlice } from "@reduxjs/toolkit";

const productsJson = require("./products.json");

const initialState = {
  products: productsJson,
  cars: productsJson.filter((product) => product.type === "car"),
  solars: productsJson.filter((product) => product.type === "solar"),
  others: productsJson.filter((product) => product.type === "other"),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.product.products;
export const selectCars = (state) => state.product.cars;
export const selectSolars = (state) => state.product.solars;
export const selectOthers = (state) => state.product.others;

export default productSlice.reducer;
