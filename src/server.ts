import bodyParser from 'body-parser';
import express from 'express';
import { initialize } from 'express-openapi';

const apiDoc = require('./apiDoc');

const app = express();

app.use(bodyParser.json());

initialize({
  apiDoc,
  docsPath: '/docs',
  app,
  paths: './src/apiPaths',
  routesGlob: '**/*.{ts,js}',
  routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
  exposeApiDocs: true
});

app.use(((err, req, res, next) => {
  res.status(err.status).json(err);
}) as express.ErrorRequestHandler);

app.listen(8080);
