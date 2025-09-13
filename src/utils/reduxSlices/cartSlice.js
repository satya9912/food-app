import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers : {
        addItems : (state, action) => {
            console.log(action.payload);
            state.items.push(action.payload);
        },
        removeItems : (state, action) => {
            state.items.pop();
        },
        clearCart : (state, action) => {
            state.items.length = 0;
        }
    }
});

export default cartSlice.reducer;
export const {addItems, removeItems, clearCart} = cartSlice.actions;