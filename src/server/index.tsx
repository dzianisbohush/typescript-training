import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
// import { getBundles } from 'react-loadable-ssr-addon';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from '../common/App';

const manifest = require('../../dist/react-loadable-ssr-addon');

const PORT = 3000;
const server = express();

server.use(express.static('dist'));

server.use('/', (req, res) => {
  const modules = new Set();
  const context = {};
  const sheet = new ServerStyleSheet();

  const html = renderToString(
    sheet.collectStyles(
        // eslint-disable-next-line react/jsx-filename-extension
      <Loadable.Capture report={moduleName => modules.add(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Loadable.Capture>
    )
  );
  const styles = sheet.getStyleTags();

  // const bundles = getBundles(manifest, [
  //   ...manifest.entrypoints,
  //   ...Array.from(modules)
  // ]);

  // const scripts = bundles.js || [];
    // eslint-disable-next-line no-undef
  const scripts: never[] = [];

  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Simple weather app</title>
        ${styles}
    </head>
    <body>
        <div id="root">${html}</div>
        ${scripts.map((script: { file: any; }) => {
        return `
          <script src="${script.file}"></script>`; }) .join(' ')
        }
        <script>
            if ('serviceWorker' in navigator) {
                // window.addEventListener('load', () => {
                //     navigator.serviceWorker.register('/serviceWorker.js');
                // });
            }
        </script>
    </body>
    </html>
  `);
});

Loadable.preloadAll()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Running on http://localhost:${PORT}/`);
    });
  })
  .catch(err => {
    console.log(err);
  });
