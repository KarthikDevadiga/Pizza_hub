import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";
import cartSlice from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    cartItem: cartSlice,
  },
});

export default store;
