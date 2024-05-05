import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkUser, createUser } from "./authAPI";

const initialState = {
  status: "idle",
  currentUser: null,
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const { data } = await createUser(userData);
    return data;
  }
);

export const checkUserAsync = createAsyncThunk(
  "user/checkUser",
  async (userData) => {
    const { data } = await checkUser(userData);
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      });
  },
});

export default userSlice.reducer;
