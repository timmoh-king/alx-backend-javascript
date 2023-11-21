/**
 * create a small HTTP server using Express module:
 */

const express = require('express');

const app = express();
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  process.stdout.write(`Server running at http://${host}:${port}\n`);
});
