import React from "react";
import AuthContext from "../../../contexts/AuthContext";
import styled from "react-emotion";

/* 
<========================================>
  Component Imports
<========================================>
*/
import AuthLinks from "./navigation/AuthLinks";
import NonAuthLinks from "./navigation/NonAuthLinks";
import SubscriptionsMenuList from "./navigation/SubscriptionsMenuList";
import CategoryMenuList from "./navigation/CategoryMenuList";

// import { Link } from "react-router-dom";

const MenuContainer = styled("div")`
  padding: 0 1em;
  li {
    list-style: none;
  }
`;

const Navigation = () => {
  return (
    <AuthContext.Consumer>
      {({ currentUser, subs }) => (
        <MenuContainer>
          <aside className="menu">
            <React.Fragment>
              <p className="menu-label">General</p>
              <ul className="menu-list">
                {currentUser ? <AuthLinks /> : <NonAuthLinks />}
              </ul>

              {currentUser && (
                <React.Fragment>
                  <p className="menu-label">Subscriptions Info</p>
                  <ul className="menu-list">
                    <CategoryMenuList />
                    <SubscriptionsMenuList subs={subs} />
                  </ul>
                </React.Fragment>
              )}
            </React.Fragment>
          </aside>
        </MenuContainer>
      )}
    </AuthContext.Consumer>
  );
};

export default Navigation;
