import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type signType = {
    value:string
}

const initialState:signType = {
    value: "3D CALCULATOR"
}

export const signSlice = createSlice({
    name: "sign",
    initialState,
    reducers:{
        addSign: (state, action: PayloadAction<string>)=>{
            state.value += action.payload
        }
    }
})

export const {addSign} = signSlice.actions;

export default signSlice.reducer