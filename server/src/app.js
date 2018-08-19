import routes from './api';
const express = require('express');
const middleware = require('../config/middleware');
require('../config/db');

const app = express();
const PORT = 5000;

/* 
<========================================>
  Setup Middleware and Routes
<========================================>
*/
middleware(app);
routes(app);

/* 
<========================================>
  Error Handlers
<========================================>
*/
// Error Handlers if other routes aren't found
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

/* 
  Error handler if error is thrown from anywhere
  in the server by next(error)
*/
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});

/* 
<========================================>
  Startup Web Server
<========================================>
*/
app.listen(PORT, function(err) {
  if(err) {
    console.log(`
      =============
      Error Starting Server
      ${err}
      ============
    `)
  }
  console.log(`
  <========================================>
    Server Running on http://localhost:${PORT}
  <========================================>`);
});
