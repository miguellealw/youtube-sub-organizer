import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import DashboardPage from "../DashboardPage";
import ChannelInfoPage from "../ChannelInfoPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: LandingPage
  },
  {
    path: "/dashboard",
    component: DashboardPage
  },
  {
    path: "/:subChannelId",
    component: ChannelInfoPage
  }
];

const Router = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Switch>
);

export default Router;
