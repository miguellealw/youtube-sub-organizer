import { Router } from "express";

import { currentUser, getSubs, logout } from "./userController";
const routes = new Router();

routes.get("/current_user", currentUser);

routes.get("/logout", logout);

export default routes;
