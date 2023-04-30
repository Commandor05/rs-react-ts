import { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/User';
import { createSliceRaw } from '../../../types/redux';

export type UsersState = {
  data: User[];
};

const initialState: UsersState = { data: [] };

const usersSlice = createSliceRaw({
  name: 'users',
  initialState,
  reducers: {
    addedUser(state, action: PayloadAction<User>) {
      state.data.push(action.payload);
    },
  },
});

export const { addedUser } = usersSlice.actions;
export default usersSlice.reducer;
