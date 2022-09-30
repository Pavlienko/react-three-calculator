import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://pavlienko.ru/node/threecalchistory";

type SignType = {
  a?: string;
  b?: string;
  operation?: string;
  result?: number;
  resultSign: string;
  store: [string, string, string, number | undefined];
};

const DotsCheck = (value: string) => {
  const stringArr = value.split("");
  const result = stringArr.filter((e) => e === ".");
  if (result.length > 0) {
    return false;
  } else {
    return true;
  }
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
        alert("not enough inputs");
      }
      break;
    case "-":
      if (a && b) {
        return IntCheck(Number(a) - Number(b));
      } else {
        alert("not enough inputs");
      }
      break;
    case "*":
      if (a && b) {
        return IntCheck(Number(a) * Number(b));
      } else {
        alert("not enough inputs");
      }
      break;
    case "/":
      if (a && b) {
        if (Number(b) !== 0) {
          return IntCheck(Number(a) / Number(b));
        } else {
          alert("no no no");
        }
      } else {
        alert("not enough inputs");
      }
      break;
  }
  return;
};

export const addToHistory = createAsyncThunk(
  "calchistory",
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
  store: ["", "", "", undefined],
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    addSign: (state, action: PayloadAction<string>) => {
      if (state.resultSign === initialState.resultSign) {
        state.resultSign = "";
      }
      if (state.operation) {
        state.b += action.payload;
        state.resultSign += action.payload;
      } else {
        if (state.result) {
          state.result = undefined;
          state.a = action.payload;
          state.resultSign = action.payload;
        } else {
          state.result = undefined;
          state.a += action.payload;
          state.resultSign += action.payload;
        }
      }
    },
    updateOperation: (state, action: PayloadAction<string>) => {
      if (state.a) {
        if (state.b) {
          alert("please count first");
        } else {
          state.operation = action.payload;
          state.resultSign = state.a + state.operation;
        }
      } else {
        alert("enter digits first");
      }
    },
    checkDots: (state, action: PayloadAction<string>) => {
      if (state.operation) {
        if (state.b && DotsCheck(state.b)) {
          state.b += action.payload;
          state.resultSign += action.payload;
        } else {
          if (state.b === "") {
            state.b += action.payload;
            state.resultSign += action.payload;
          } else {
            alert("u can`t use more than one points 1");
          }
        }
      } else {
        if (state.a && DotsCheck(state.a)) {
          state.a += action.payload;
          state.resultSign += action.payload;
        } else {
          if (state.a === "" && state.b === "") {
            state.a += action.payload;
            state.resultSign = action.payload;
          } else {
            alert("u can`t use more than one points 2");
          }
        }
      }
    },
    changeOperator: (state) => {
      if (state.operation) {
        if (state.b !== ".") {
          state.b = String(-Number(state.b));
          state.resultSign = state.a + state.operation + state.b;
        } else {
          alert("please, add some digits first");
        }
      } else {
        if (state.a !== ".") {
          state.a = String(-Number(state.a));
          state.resultSign = state.a + state.operation + state.b;
        } else {
          alert("please, add some digits first");
        }
      }
    },
    clearSign: (state) => {
      state.a = "";
      state.b = "";
      state.operation = "";
      state.result = undefined;
      state.resultSign = initialState.resultSign;
      state.store = initialState.store;
    },
    storeSign: (state) => {
      if (
        (state.store[0] || state.store[1] || state.store[2]) !== "" ||
        state.store[3] !== undefined
      ) {
        if (
          state.store[0] +
          state.store[2] +
            state.store[1] +
            (state.store[3] === undefined ? "" : String(state.store[3])) ===
          state.resultSign
        ) {
          state.store = initialState.store;
        } else {
          state.resultSign =
            state.store[0] +
            state.store[2] +
            state.store[1] +
            (state.store[3] === undefined ? "" : String(state.store[3]));
          state.a = state.store[0];
          state.b = state.store[1];
          state.operation = state.store[2];
          state.result = state.store[3];
        }
      } else {
        state.store = [
          state.a ? state.a : "",
          state.b ? state.b : "",
          state.operation ? state.operation : "",
          state.result ? state.result : undefined,
        ];
      }
    },
    replaceStoreSign: (state) => {
      state.store = ["", "", "", undefined];
      state.store = [
        state.a ? state.a : "",
        state.b ? state.b : "",
        state.operation ? state.operation : "",
        undefined
        // state.a && state.b && state.result ? state.result : undefined,
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToHistory.pending, (state) => {
      state.resultSign = "CALCULATING...";
    });

    builder.addCase(addToHistory.fulfilled, (state) => {
      if (state.a && state.b && state.operation) {
        state.result = Number(
          IntCheck(Number(Calculate(state.a, state.b, state.operation)))
        );
        state.resultSign = String(state.result);
        state.a = state.resultSign;
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

export const {
  addSign,
  updateOperation,
  checkDots,
  changeOperator,
  clearSign,
  storeSign,
  replaceStoreSign,
} = signSlice.actions;

export type { SignType };

export default signSlice.reducer;
