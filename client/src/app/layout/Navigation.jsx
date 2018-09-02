import React from "react";
import AuthContext from "../../contexts/AuthContext";

const AuthLinks = () => (
  <React.Fragment>
    <li>
      <a href="#">Dashboard</a>
    </li>
    <li>
      <a href="http://localhost:5000/api/v1/user/logout">Logout</a>
    </li>
  </React.Fragment>
);

const NonAuthLinks = () => (
  <li>
    <a href="http://localhost:5000/auth/youtube">Login</a>
  </li>
);

const Navigation = ({ currentUser }) => {
  return (
    <ul className="list-reset flex">
      <AuthContext.Consumer>
        {({ currentUser }) => (currentUser ? <AuthLinks /> : <NonAuthLinks />)}
      </AuthContext.Consumer>
    </ul>
  );
};

export default Navigation;
