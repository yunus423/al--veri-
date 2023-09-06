


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartİtems: [],
  totalAmount: 0,
  totalQuantity: 0,

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartİtems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartİtems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.price) + Number(newItem.price);
      }

      state.totalAmount = state.cartİtems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartİtems.find((item) => item.id === id);

      if (existingItem) {
        state.cartİtems = state.cartİtems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartİtems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
    },
  },
});
  
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
 