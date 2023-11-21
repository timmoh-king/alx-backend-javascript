/**
 * create a small HTTP server using the http module:
 */

const http = require('http');

const app = http.createServer();
const host = '127.0.0.1';
const port = 1245;

app.on((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
