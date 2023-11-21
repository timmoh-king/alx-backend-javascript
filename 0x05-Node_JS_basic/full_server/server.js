const express = require('express');
const mapRoutes = require('./routes');

const app = express();
const port = 1245;
const host = '127.0.0.1';

mapRoutes(app);
app.listen(port, () => {
  process.stdout.write(`Server running at http://${host}:${port}\n`);
});

export default app;
module.exports = app;
