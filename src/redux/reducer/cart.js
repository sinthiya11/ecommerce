import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    total: 0,  // Add a new property for total
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, count: 1 };
      state.list = [...state.list, newItem];
      state.total += newItem.price; // Increment total with the new item's price
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.list = state.list.filter(item => item.id !== itemIdToRemove);
      // Recalculate total after removing an item
      state.total = state.list.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    modifyItem: (state, action) => {
      const index = state.list.findIndex(product => product.id === action.payload.id);
      state.list = [
        ...state.list.slice(0, index),
        { ...state.list[index], count: action.payload.count },
        ...state.list.slice(index + 1),
      ];
      // Recalculate total after modifying an item's count
      state.total = state.list.reduce((acc, item) => acc + item.price * item.count, 0);
    },
  },
});

export const { addItem, removeItem, modifyItem } = cartSlice.actions;
export default cartSlice.reducer;