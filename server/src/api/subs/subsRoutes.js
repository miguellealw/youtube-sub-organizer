import { Router } from "express";
import isLoggedIn from "../../middlewares/isLoggedIn";
import { getSubs } from "./subsController";

const routes = new Router();

routes.get("/", isLoggedIn, getSubs);

export default routes;
