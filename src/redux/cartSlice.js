import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (!item) {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    removeFromCart: (state, action) => {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

