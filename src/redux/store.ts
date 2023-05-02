import * as toolkitRaw from '@reduxjs/toolkit';
import { PreloadedState } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import searchReducer from './features/search/searchSlice';
import { photoSlice } from './features/photo/photoSlice';

const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const rootReducer = combineReducers({
  users: usersReducer,
  search: searchReducer,
  [photoSlice.reducerPath]: photoSlice.reducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: {
      users: usersReducer,
      search: searchReducer,
      [photoSlice.reducerPath]: photoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(photoSlice.middleware);
    },
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
