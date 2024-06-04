import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "./orderApi";

const initialState = {
  status: "idle",
  orders: [],
};

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (item) => {
    const { data } = await createOrder(item);
    return data;
  }
);

export const cartSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders.push(action.payload);
      });
  },
});

export default cartSlice.reducer;
