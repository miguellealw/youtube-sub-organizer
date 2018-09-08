import React from 'react';

const AuthLinks = () => (
  <React.Fragment>
    <li>
      <a className="is-active" href="#">
        Dashboard
      </a>
    </li>
    <li>
      <a href="http://localhost:5000/api/v1/user/logout">Logout</a>
    </li>
  </React.Fragment>
);

export default AuthLinks;