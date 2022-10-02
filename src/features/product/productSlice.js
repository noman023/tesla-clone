import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    "Model S",
    "Model Y",
    "Model X",
    "Model 3",
    "Solar Roof",
    "Solar Panels",
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;
