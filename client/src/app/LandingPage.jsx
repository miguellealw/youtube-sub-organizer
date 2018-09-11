import React, { Component } from "react";
import AuthContext from "../contexts/AuthContext";
import styled from "react-emotion";
import heroImg from "../images/hero-img.jpg";
import logo from "../images/logo.png";
// import SubsList from "../components/SubsList";

const LandingPageContainer = styled("section")`
  background-image: url("${heroImg}");
  background-size: cover;
  width: 100%;
  height: 100vh;

  .youtubeLogo {
    color: black;
  }

  .redLogoYoutube {
    color: #FF0000;
  }

  .navbar {
    margin-top: 2em;
  }

  &::after {
    content: '';
    background: rgb(255,255,255);  
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 100%); 

    /* background: linear-gradient(0deg, rgba(253,35,255,0.499019676229867) 0%, rgba(255,0,0,0.4962185557816877) 100%);  */
    /* background: rgb(131,58,180); */
    /* background: linear-gradient(45deg, rgba(131,58,180,0.5) 0%, rgba(255,38,38,0.5) 50%, rgba(252,69,211,0.5) 100%); */
    /* background: linear-gradient(0deg, rgba(255,0,0,.5) 0%, rgba(255,53,141,.5) 100%); */

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  h1, h2 {
    position: relative;
    color: white;
    z-index: 100;
  }

  h2 {
    font-weight: 400;
  }

  .navbar-brand img {
    /* width: 8em; */
  }

  a.button {
    padding: 1.2em 2.5em;
    font-weight: 600;
  }

  h2.subtitle {
    padding-top: .3em;
  }

  hr {
    border: 0;
    width: 30%;
    margin: 0 auto;
    color: white;
    background: white;
    height: 1px;
    position: relative;
    z-index: 2;
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer className="hero is-fullheight has-text-centered">
        <div className="hero-head">
          <div className="navbar">
            <div className="container level">
              <div className="navbar-brand level-left">
                <div className="navbar-item">
                  <img src={`${logo}`} />
                </div>
              </div>

              <span className="navbar-item level-right">
                <a
                  href="http://localhost:5000/auth/youtube"
                  className="button is-primary"
                >
                  <span className="icon">
                    <i className="fas fa-sign-in-alt" />
                  </span>
                  <span>Login</span>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-body">
          <div className="container is-black">
            <h1 className="title is-1">
              <span className="youtubeLogo">
                You
                <span className="redLogoYoutube">Tube </span>
              </span>
              Sub Organizer
            </h1>
            <hr/>
            <h2 className="subtitle is-5">
              {/* Subscribed to a lot of YouTube channels? Organize them! */}
              Tired of Sifting Through your Messy YouTube Subscriptions Box? Organize
              Them!
            </h2>
          </div>
        </div>
      </LandingPageContainer>
    );
  }
}

export default LandingPage;
