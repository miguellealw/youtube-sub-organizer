import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import DashboardPage from '../DashboardPage';

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/dashboard" component={DashboardPage} />
  </Switch>
)

export default Router;