import React from "react";
import AuthContext from "../contexts/AuthContext";
import Spinner from "../components/Spinner";
import styled from "react-emotion";

const ChannelInfoContainer = styled("div")`
  /* background: pink; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  a.button {
    margin: 2em 0;
  }

  figure.image{
    margin: 0;
  }

  hr {
    border: 0;
    width: 50%;
    margin: 2.5em auto;
    background: #ddd;
    height: 1px;
    position: relative;
    z-index: 2;
  }

  p {
    line-height: 2rem;
  }
`;

const ChannelInfoPage = ({ match }) => (
  <AuthContext.Consumer>
    {({ subs }) => {
      let channelLink;

      // Get Channel Info
      const channelInfo =
        subs.subList &&
        subs.subList.items.find(
          sub => sub.snippet.resourceId.channelId === match.params.subChannelId
        );

      // Create Channel Link
      if (channelInfo) {
        channelLink = `https://www.youtube.com/channel/${
          channelInfo.snippet.resourceId.channelId
        }`;
      }

      return (
        <ChannelInfoContainer className="container">
          {!channelInfo ? (
            <Spinner subs={subs} />
          ) : (
            <React.Fragment>
              <h2>{channelInfo.snippet.title}</h2>

              {/* 
              <========================================>
                Channel Img
              <========================================>
              */}
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src={`${channelInfo.snippet.thumbnails.high.url}`}
                  alt={`${channelInfo.snippet.title}'s Profile Picture`}
                />
              </figure>

              <hr />
              {/* 
              <========================================>
                Channel Description
              <========================================>
              */}
              <p>
                {channelInfo.snippet.description !== "" ? (
                  channelInfo.snippet.description
                ) : (
                  <span style={{ color: "#bbb" }}>
                    ☹ Sorry. No Description is Available for This Channel
                  </span>
                )}
              </p>

              {/* 
              <========================================>
                'Go to Channel' Button
              <========================================>
              */}
              <a
                href={channelLink}
                target="_blank"
                className="button is-danger"
              >
                {/* <span className="icon">
                  <i className="fas fa-check" />
                </span> */}
                <span>Go to Channel</span>
              </a>
            </React.Fragment>
          )}
        </ChannelInfoContainer>
      );
    }}
  </AuthContext.Consumer>
);

export default ChannelInfoPage;
