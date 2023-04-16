import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css';
import { fetchPhotos } from './redux/features/photos/photosSlice';

export const potosEndpoint = '/photos';

store.dispatch(fetchPhotos({ endpoint: potosEndpoint }));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
