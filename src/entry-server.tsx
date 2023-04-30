import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { Location } from 'react-router-dom';
import App, { potosEndpoint } from './App';
import store from './redux/store';
import { photoSlice } from './redux/features/photo/photoSlice';

export default async function render(
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) {
  store.dispatch(photoSlice.endpoints.fetchPhotos.initiate(potosEndpoint));
  await Promise.all(store.dispatch(photoSlice.util.getRunningQueriesThunk()));

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,

    opts
  );
  return stream;
}
