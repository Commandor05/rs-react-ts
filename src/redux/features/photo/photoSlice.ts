import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';
import { clientId, baseUrl } from '../../../configs/api';
import { Photo } from '../../../types/Photo';
import { HYDRATE } from '../../../types/redux';

type TypeRtkQuery = typeof rtkQuery & { default?: unknown };

const { buildCreateApi, coreModule, reactHooksModule, fetchBaseQuery } = ((rtkQuery as TypeRtkQuery)
  .default ?? rtkQuery) as typeof rtkQuery;

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

type SearchResponse = {
  results: Photo[] | [];
  total: number;
  total_pages: number;
};

export const photoSlice = createApi({
  reducerPath: 'photo',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders(headers) {
      headers.set('Accept-Version', 'v1');
      headers.set('Authorization', `Client-ID ${clientId}`);

      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints(builder) {
    return {
      fetchPhoto: builder.query<Photo, string | void>({
        query(id) {
          return `/photos/${id}`;
        },
      }),
      fetchPhotos: builder.query<Photo[], string | void>({
        query() {
          return '/photos';
        },
      }),
      fetchSearchPhotos: builder.query<SearchResponse, string | void>({
        query(querySrting) {
          return `/search/photos?query=${querySrting}`;
        },
      }),
    };
  },
});

export const { useFetchPhotoQuery, useFetchPhotosQuery, useFetchSearchPhotosQuery } = photoSlice;
