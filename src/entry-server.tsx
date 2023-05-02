import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { Location } from 'react-router-dom';
import App, { potosEndpoint } from './App';
import setupStore from './redux/store';
import { photoSlice } from './redux/features/photo/photoSlice';

const store = setupStore({});

export default async function render(
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) {
  store.dispatch(photoSlice.endpoints.fetchPhotos.initiate(potosEndpoint));
  await Promise.all(store.dispatch(photoSlice.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  const stream = renderToPipeableStream(
    <>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </>,
    opts
  );
  return [stream, preloadedState];
}
