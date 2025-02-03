import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      if (!action.payload) return;
      const item = state.cart.find((ele) => ele.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      if (!action.payload) return;
      const item = state.cart.find((ele) => ele.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

console.log("cartslice");
console.log(cartSlice.actions);
console.log(cartSlice.reducer);

export const {
  addItem,
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (state) =>
  state.cartItem.cart.reduce((sum, ele) => sum + ele.quantity, 0);

export const getTotalPrice = (state) =>
  state.cartItem.cart.reduce((sum, ele) => sum + ele.totalPrice, 0);

export const getCartItems = (state) => state.cartItem.cart;

export const getItem = (id) => (state) =>
  state.cartItem.cart.find((ele) => ele.pizzaId === id);
