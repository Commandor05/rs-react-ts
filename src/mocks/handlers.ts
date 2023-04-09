import { rest } from 'msw';
import { baseUrl } from '../configs/api';
import photosData from '../data/photos';
import searchTestPhotosData from '../data/searchTestPhotos';

const endpoint = '/photos';
const searchPotosEndpoint = '/search/photos';

export const handlers = [
  rest.get(`${baseUrl}${endpoint}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(photosData));
  }),

  rest.get(`${baseUrl}${searchPotosEndpoint}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchTestPhotosData));
  }),
];
