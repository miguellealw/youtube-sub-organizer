const express = require('express');
const middleware = require('../config/middleware');
import routes from './api';

const app = express();

middleware(app);
routes(app);

app.listen(3000, function(err) {
  if(err) {
    console.log(`
      =============
      Error Starting Server
      ${err}
      ============
    `)
  }
  console.log(`
    ============
    Server Running on http://localhost:3000
    ============
  `)
});