import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'pizza/fetchDataByStatus',
  async (params: Record<string, string>) => {
    const url = 'https://64b7e5f521b9aa6eb0793d1e.mockapi.io/items';
    const { page, category, sortBy, search } = params;
    const { data } = await axios.get(url + `${page}${category}${sortBy}${search}&order=desc`);
    return data;
  },
);

type PizzaItemsType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export type PizzaInitialState = {
  items: PizzaItemsType[];
};

const initialState: PizzaInitialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItemsType[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<PizzaItemsType[]>) => {
      state.items = action.payload;
      // console.log('Данные получены');
    });
    builder.addCase(fetchData.rejected, () => {
      console.log('Ошибка получения данных');
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
