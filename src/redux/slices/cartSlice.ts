import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartItemReduxProps = {
  id: number;
  title: string;
  price: number;
  type: string;
  count: number;
  imageUrl: string;
};

export type CartInitialState = {
  totalPrice: number;
  cartItems: CartItemReduxProps[];
};

const initialState: CartInitialState = {
  totalPrice: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemReduxProps>) => {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);
      findItem && findItem.count--;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, decrementItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
