import passport from "passport";
import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import keys from "./keys";

const pino = require("express-pino-logger")({
  prettyPrint: {
    levelFirst: true
  }
});
require("./passport");

const isDev = process.env.NODE_ENV === "development";

/* 
<========================================>
  Middleware
<========================================>
*/
module.exports = app => {
  app.use(cors());
  app.use(express.json()); // replacement for body-parser

  app.use(
    cookieSession({
      name: "session",
      keys: keys.cookieKeys,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  if (isDev) {
    app.use(pino);
  }
};
