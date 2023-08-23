import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SortPropertyType = {
  name: string;
  sortProperty: string;
};

export type FilterInitialState = {
  searchValue: string;
  categoryIndex: number;
  currentPage: number;
  sortProperty: SortPropertyType;
};

const intialState: FilterInitialState = {
  searchValue: '',
  categoryIndex: 0,
  currentPage: 1,
  sortProperty: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: intialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryIndex(state, action: PayloadAction<number>) {
      state.categoryIndex = action.payload;
    },
    setSortProperty(state, action: PayloadAction<SortPropertyType>) {
      state.sortProperty = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchValue, setCategoryIndex, setSortProperty, setCurrentPage } =
  filterSlice.actions;
export default filterSlice.reducer;
