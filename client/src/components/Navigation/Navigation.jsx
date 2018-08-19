import React from "react";

const Navigation = ({ currentUser }) => {
  return (
    <ul className="list-reset flex">
      {currentUser ? (
        <React.Fragment>
          <li className="mr-6">
            <a className="text-blue hover:text-blue-darker" href="#">
              Dashboard
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-blue hover:text-blue-darker"
              href="http://localhost:5000/api/v1/user/logout"
            >
              Logout
            </a>
          </li>
        </React.Fragment>
      ) : (
        <li className="mr-6">
          <a
            className="text-blue hover:text-blue-darker"
            href="http://localhost:5000/auth/youtube"
          >
            Login
          </a>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
