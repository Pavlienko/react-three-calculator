import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://62.113.105.69:3000/threecalchistory";

type signType = {
  value: string;
};

export const addToHistory = createAsyncThunk(
  "calc/history",
  async (data: string) => {
    try {
      await axios.post(API_URL, {
        datetime: new Date().toLocaleString(),
        operation: data + " = " + eval(data),
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: signType = {
  value: "3D CALCULATOR",
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    addSign: (state, action: PayloadAction<string>) => {
      if (state.value === initialState.value) state.value = "";
      state.value += action.payload;
    },
    clearSign: (state) => {
      state.value = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToHistory.pending, () => {
      return;
    });

    builder.addCase(addToHistory.fulfilled, (state) => {
      state.value = eval(state.value);
    });

    builder.addCase(addToHistory.rejected, () => {
      alert("there is a problem with connection to database");
    });
  },
});

export const { addSign, clearSign } = signSlice.actions;

export default signSlice.reducer;
