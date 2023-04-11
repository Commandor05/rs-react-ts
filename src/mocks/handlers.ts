import { rest } from 'msw';
import { baseUrl } from '../configs/api';
import photosData from '../data/photos';
import searchTestPhotosData from '../data/searchTestPhotos';

const endpoint = '/photos';
const searchPotosEndpoint = '/search/photos';
const potosEndpoint = `/photos/${photosData[0].id}`;

export const handlers = [
  rest.get(`${baseUrl}${endpoint}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(photosData));
  }),

  rest.get(`${baseUrl}${searchPotosEndpoint}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchTestPhotosData));
  }),

  rest.get(`${baseUrl}${potosEndpoint}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(photosData[0]));
  }),
];
