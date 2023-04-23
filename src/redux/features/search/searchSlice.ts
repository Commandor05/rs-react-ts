import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type searchState = {
  searchQuery: string;
};

const initialState: searchState = {
  searchQuery: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updatedSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { updatedSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
