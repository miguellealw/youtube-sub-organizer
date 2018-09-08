import React, { Component } from "react";
import Navigation from "./menu/Navigation";

import styled from "react-emotion";

const MenuContainer = styled("div")`
  flex: 1;
  width: 15%;
  color: white;
  min-height: 100vh;
  background: #2d3047;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  /* box-shadow: 10px 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */

  h1 {
    padding-top: 0.5em;
    letter-spacing: 0.1em;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <MenuContainer>
        <h1 className="title is-2 has-text-white has-text-centered has-text-weight-bold">
          YSO
        </h1>
        <h3 className="subtitle is-6 has-text-white has-text-centered has-text-weight-normal">
          Youtube Sub Organizer
        </h3>

        <Navigation />
      </MenuContainer>
    );
  }
}
