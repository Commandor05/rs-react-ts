import { PayloadAction } from '@reduxjs/toolkit';
import { createSliceRaw } from '../../../types/redux';

export type searchState = {
  searchQuery: string;
  searchQueryApplied: string;
};

const initialState: searchState = {
  searchQuery: '',
  searchQueryApplied: '',
};

const searchSlice = createSliceRaw({
  name: 'search',
  initialState,
  reducers: {
    updatedSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    updatedSearchQueryApply(state, action: PayloadAction<string>) {
      state.searchQueryApplied = action.payload;
    },
  },
});

export const { updatedSearchQuery, updatedSearchQueryApply } = searchSlice.actions;
export default searchSlice.reducer;
