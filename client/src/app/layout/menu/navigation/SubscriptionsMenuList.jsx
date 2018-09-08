import React from "react";
import { ClipLoader } from "react-spinners";
// import { PulseLoader } from "react-spinners";

const SubscriptionsMenuList = ({ subs }) => (
  <li>
    <a>My Subscriptions</a>
    <ul>
      {subs.isLoading ? (
        <ClipLoader
          loading={subs.isLoading}
          sizeUnit={"px"}
          size={30}
          color={"#aaaec9"}
        />
      ) : (
        subs.subList.items.map(sub => (
          <React.Fragment key={sub.id}>
            <li>
              <a
                href={`https://www.youtube.com/channel/${
                  sub.snippet.resourceId.channelId
                }`}
                target="_blank"
              >
                {sub.snippet.title}
              </a>
            </li>
          </React.Fragment>
        ))
      )}
    </ul>
  </li>
);

export default SubscriptionsMenuList;
