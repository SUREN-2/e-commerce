import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      console.log('yes')

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state) {
      state.cartItems = []; // Empty the cart array
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      localStorage.removeItem("cartItems"); // Remove from localStorage
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    incrementCart(state, action) {
      const productIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    addByIncrement(state, action) {
      const productIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload.product._id
      );

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += action.payload.cartQuantity;
      } else {
        const cartQuantity = action.payload.cartQuantity > 1 ? action.payload.cartQuantity : 1;
        const tempProduct = { ...action.payload.product, cartQuantity };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = parseFloat(total.toFixed(2));

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart,clearCart, incrementCart, getTotals, addByIncrement } = CartSlice.actions;

export const cartReducer = CartSlice.reducer;
