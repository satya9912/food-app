import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlices/cartSlice"

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});
export default appStore;