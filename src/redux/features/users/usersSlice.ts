import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/User';

export type UsersState = {
  data: User[];
};

const initialState: UsersState = { data: [] };

const usersSlice = createSlice({
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
