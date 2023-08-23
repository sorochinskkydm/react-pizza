import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice.ts';
import cartSlice from './slices/cartSlice.ts';
import pizzaSlice from './slices/pizzaSlice.ts';

const store = configureStore({
  reducer: {
    filterReducer: filterSlice,
    cartReducer: cartSlice,
    pizzaReducer: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
