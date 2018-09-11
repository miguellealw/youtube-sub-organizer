import routes from "./api";
const express = require("express");
const middleware = require("../config/middleware");
import { successServerStartup, errorServerStartup } from "../utils/logMessages";
require("../config/db");

const app = express();
// const PORT = process.env.PORT || 5000;
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
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: error.message
  });
});

/* 
<========================================>
  Startup Web Server
<========================================>
*/
app.listen(PORT, function(err) {
  if (err) {
    console.error(errorServerStartup(err));
  }

  console.log(successServerStartup(PORT));
});
