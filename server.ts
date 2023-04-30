import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import renderApp from './dist/server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.SERVER_PORT || 3001;

const html = fs
  .readFileSync(path.resolve(__dirname, './dist/client/index.html'), { encoding: 'utf8' })
  .toString();

const parts = html.split('not rendered');

let didError = false;

function getStatusCode() {
  if (didError) {
    return 500;
  } else {
    return 200;
  }
}

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use(async (req, res) => {
  res.write(parts[0]);
  const stream = await renderApp(req.url, {
    //don't work properly for unknown reason
    // bootstrapScripts: ['/src/entry-client.tsx'],
    onShellReady() {
      res.statusCode = getStatusCode();
      stream.pipe(res);
    },
    onShellError() {
      res.statusCode = getStatusCode();
      res.send('<h1>Something went wrong</h1>');
    },
    onAllReady() {
      res.write(parts[1]);
      res.end();
    },
    onError(err: { message: unknown }) {
      didError = true;
      console.error(err.message);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
