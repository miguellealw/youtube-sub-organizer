import React from "react";
import Subs from "./subslist/Subs";
import styled from "react-emotion";

const SubsListContainer = styled("div")`
  width: 85%;
`

const ExpiredTokenMessage = () => (
  <div>
    Token is expired{" "}
    <span role="img" aria-label="sad face">
      😑
    </span>{" "}
    — Logout and Login Again...
  </div>
);

const SubsList = ({ subs, currentUser }) => (
  <SubsListContainer>
    {subs === "" && currentUser ? (
      <ExpiredTokenMessage />
    ) : (
      <Subs _subs={subs} />
    )}
  </SubsListContainer>
);

export default SubsList;
