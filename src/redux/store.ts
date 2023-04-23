import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import photosReducer from './features/photos/photosSlice';
import searchReducer from './features/search/searchSlice';
import { photoSlice } from './features/photo/photoSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    photos: photosReducer,
    search: searchReducer,
    [photoSlice.reducerPath]: photoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(photoSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
