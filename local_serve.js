require('dotenv').config();
console.log("Application: ","Himalaya");
const express = require('express');
const routes = require('./routes');
const app = express();
const port = 8080;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Application [Himalaya] listening on port ${port}`);
});
