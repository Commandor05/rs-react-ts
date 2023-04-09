import { rest } from 'msw';
import { baseUrl } from '../configs/api';
import photosData from '../data/photos';

const endpoint = '/photos';

export const handlers = [
  rest.get(`${baseUrl}${endpoint}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(photosData));
  }),
];
