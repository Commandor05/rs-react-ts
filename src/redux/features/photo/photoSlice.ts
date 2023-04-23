import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clientId, baseUrl } from '../../../configs/api';
import { Photo } from '../../../types/Photo';

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
  endpoints(builder) {
    return {
      fetchPhoto: builder.query<Photo, string | void>({
        query(id) {
          return `/photos/${id}`;
        },
      }),
    };
  },
});

export const { useFetchPhotoQuery } = photoSlice;
