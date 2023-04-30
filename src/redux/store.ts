import * as toolkitRaw from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import searchReducer from './features/search/searchSlice';
import { photoSlice } from './features/photo/photoSlice';
const { configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const store = configureStore({
  reducer: {
    users: usersReducer,
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
