import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import AuthContext from "../contexts/AuthContext";

import Site from "./layout/Site";
import Menu from "./layout/Menu";
import Content from "./layout/Content";
import Router from "./layout/Router";
import LandingPage from "./LandingPage";

const MainContent = styled("main")`
  display: flex;
`;

const Layout = () => (
  <AuthContext.Consumer>
    {({ currentUser }) => (
      <Site className="has-background-white-ter">
        <Helmet title="Youtube Sub Organizer | Organize your Youtube Subscriptions" />
        
        {!currentUser ? (
          <LandingPage />
        ) : (
          <MainContent className="columns auto">
            <Menu />
            <Content className="column">
              <Router />
            </Content>
          </MainContent>
        )}

        {/* <Footer /> */}
      </Site>
    )}
  </AuthContext.Consumer>
);

export default Layout;
