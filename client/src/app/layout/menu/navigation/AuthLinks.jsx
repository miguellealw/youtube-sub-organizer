import React from "react";
import { NavLink } from "react-router-dom";

const AuthLinks = () => (
  <React.Fragment>
    <li>
      <NavLink activeClassName="is-active" to="/dashboard">
        Dashboard
      </NavLink>
    </li>
    <li>
      <a href="http://localhost:5000/api/v1/user/logout">Logout</a>
    </li>
  </React.Fragment>
);

export default AuthLinks;
