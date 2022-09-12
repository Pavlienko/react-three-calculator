import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://62.113.105.69:3000/threecalchistory";

type SignType = {
  a?: string;
  b?: string;
  operation?: string;
  result?: number;
  resultSign: string;
};

const IntCheck = (value: number) => {
  if (value % 1 === 0) {
    return value;
  } else {
    return value.toFixed(11);
  }
};

const Calculate = (a?: string, b?: string, operation?: string) => {
  switch (operation) {
    case "+":
      if (a && b) {
        return IntCheck(Number(a) + Number(b));
      } else {
        console.log("not enough inputs");
      }
      break;
    case "-":
      if (a && b) {
        return IntCheck(Number(a) - Number(b));
      } else {
        console.log("not enough inputs");
      }
      break;
    case "*":
      if (a && b) {
        return IntCheck(Number(a) * Number(b));
      } else {
        console.log("not enough inputs");
      }
      break;
    case "/":
      if (a && b) {
        return IntCheck(Number(a) / Number(b));
      } else {
        console.log("not enough inputs");
      }
      break;
  }
  return;
};

export const addToHistory = createAsyncThunk(
  "calc/history",
  async (state: SignType) => {
    try {
      await axios.post(API_URL, {
        datetime: new Date().toLocaleString(),
        operation:
          state.a +
          " " +
          state.operation +
          " " +
          state.b +
          " = " +
          String(Calculate(state.a, state.b, state.operation)),
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: SignType = {
  a: "",
  b: "",
  operation: "",
  result: undefined,
  resultSign: "3D CALCULATOR",
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    addSign: (state, action: PayloadAction<string>) => {
      if (state.resultSign === initialState.resultSign) state.resultSign = "";
      if(state.operation){
        state.b += action.payload
        state.resultSign += action.payload;
      }else{
        if(state.result){
          state.result = undefined;
          state.a = action.payload;
          state.resultSign = action.payload;
        }else{
          state.a += action.payload;
          state.resultSign += action.payload;
        }
      }
    },
    updateOperation: (state, action: PayloadAction<string>) => {
      if (state.a && state.b) {
        alert("please count before");
      } else {
        state.operation = action.payload;
        state.resultSign = String(state.a + state.operation);
      }
    },
    clearSign: (state) => {
      state.a = "";
      state.b = "";
      state.operation = "";
      state.result = undefined;
      state.resultSign = initialState.resultSign;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToHistory.pending, () => {
      return;
    });

    builder.addCase(addToHistory.fulfilled, (state) => {
      if (state.a && state.b && state.operation) {
        state.result = Number(
          IntCheck(Number(Calculate(state.a, state.b, state.operation)))
        );
        state.resultSign = String(state.result);
        state.a = String(state.result);
        state.b = "";
        state.operation = "";
      } else {
        alert("U need more inputs!");
      }
    });

    builder.addCase(addToHistory.rejected, () => {
      alert("there is a problem with connection to database");
    });
  },
});

export const { addSign, updateOperation, clearSign } = signSlice.actions;

export type { SignType };

export default signSlice.reducer;
