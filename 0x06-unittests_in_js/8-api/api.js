const express = require('express');

const app = express();
const port = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  process.stdout.write(`API available on localhost port ${port}\n`);
});

module.exports = app;
