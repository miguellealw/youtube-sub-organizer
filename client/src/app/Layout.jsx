import React from "react";
import Helmet from "react-helmet";

import Site from "./layout/Site";
import Menu from "./layout/Menu";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Router from "./layout/Router";

const Layout = () => (
  <Site className="has-background-white-ter">
    <Helmet title="Youtube Sub Organizer | Organize your Youtube Subscriptions" />

    <Menu />

    <Content>
      <Router />
    </Content>

    <Footer />
  </Site>
);

export default Layout;
