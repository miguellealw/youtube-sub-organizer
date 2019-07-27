import React from "react";
import { NavLink } from "react-router-dom";
import Spinner from "../../../../components/Spinner";

const SubscriptionsMenuList = ({ subs }) => (
  <li>
    <a>My Subscriptions</a>
    <ul>
      {subs.isLoading ? (
        <Spinner isLoading={subs.isLoading} />
      ) : (
        subs.subList.items.map(sub => (
          <React.Fragment key={sub.id}>
            <li>
              <NavLink
                to={`/${sub.snippet.resourceId.channelId}`}
                activeClassName="is-active"
              >
                {sub.snippet.title}
              </NavLink>
            </li>
          </React.Fragment>
        ))
      )}
    </ul>
  </li>
);

export default SubscriptionsMenuList;
