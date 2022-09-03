import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../features/signSlice";

export const store = configureStore({
    reducer:{
        signs: signReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;