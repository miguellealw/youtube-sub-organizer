import React from "react";
import Card from "../Card";

const SubsList = ({ subs, currentUser }) => (
  <React.Fragment>
    {subs === "" && currentUser ? (
      <div>Token is expired 😑 — Delete user from db and login again...</div>
    ) : (
      <ul className="flex flex-wrap">
        {subs &&
          subs.items.map((sub, i) => (
            //TODO: change high thumbnail to default quality
            <a
              href={`
              https://www.youtube.com/channel/${
                sub.snippet.resourceId.channelId
              }
            `}
              target="_blank"
              className="no-underline"
            >
              <Card
                key={sub.id}
                img={sub.snippet.thumbnails.high.url}
                title={sub.snippet.title}
                description={sub.snippet.description}
                i={i}
              />
            </a>
          ))}
      </ul>
    )}
  </React.Fragment>
);

export default SubsList;
