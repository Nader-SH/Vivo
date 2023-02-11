import app from './app.js';

const port = app.get('port');

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server is running on http://localhost:${port}`)
);