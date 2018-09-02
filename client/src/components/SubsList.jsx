import React from "react";
import Card from "./Card";

const ExpiredTokenMessage = () => (
  <div>
    Token is expired{" "}
    <span role="img" aria-label="sad face">
      😑
    </span>{" "}
    — Delete user from db and login again...
  </div>
);

const Subs = ({ _subs }) => (
  <ul className="columns is-multiline">
    {_subs &&
      _subs.items.map((sub, i) => (
        //TODO: change high quality thumbnail to default quality
        <a
          href={`https://www.youtube.com/channel/${
            sub.snippet.resourceId.channelId
          }`}
          target="_blank"
          className="column is-one-quarter"
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
);

const SubsList = ({ subs, currentUser }) => (
  <React.Fragment>
    {subs === "" && currentUser ? (
      <ExpiredTokenMessage />
    ) : (
      <Subs _subs={subs} />
    )}
  </React.Fragment>
);

export default SubsList;
