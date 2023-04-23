import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Photo } from '../../../types/Photo';
import { clientId, baseUrl } from '../../../configs/api';

export type PhotosState = {
  data: Photo[];
  isLoading: boolean;
  error: string;
  queryString: string;
};

const initialState: PhotosState = { data: [], isLoading: false, error: '', queryString: '' };

type fetchParams = {
  endpoint: string;
  dataField?: string;
};

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotosStatus',
  async ({ endpoint, dataField }: fetchParams, thunkAPI) => {
    let apiError = 'Data fetcing error';
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
          'Accept-Version': 'v1',
          Authorization: `Client-ID ${clientId}`,
        },
      });
      if (!response.ok) {
        throw Error(apiError);
      }

      let data = await response.json();

      if (dataField) {
        data = data[dataField];
      }

      return data;
    } catch (e) {
      if (e instanceof Error) {
        apiError = e?.message;
        return thunkAPI.rejectWithValue(apiError);
      }
    }
  }
);

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
  },
});

export default photosSlice.reducer;
