import React, { Component } from "react";
import axios from "axios";
import Layout from "./app/Layout";
import AuthContext from "./contexts/AuthContext";
import { withRouter } from "react-router-dom";

class App extends Component {
  state = {
    subs: {
      isLoading: true,
      subList: null
    },
    currentUser: null
  };

  componentDidMount = async () => {
    const currentUser = await axios({
      url: "api/v1/user/current_user",
      method: "get"
    });

    // TODO: come up with better way to tell if user is authed
    this.setState({ currentUser: currentUser.data });

    if (currentUser) {
      this.props.history.push("/dashboard");
    }

    this.fetchYoutubeData();
  };

  fetchYoutubeData = async () => {
    this.setState({
      subs: {
        isLoading: true
      }
    });

    // const response = await axios({
    //   url: `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=25&mine=true&order=alphabetical`,
    //   method: "get",
    //   headers: {
    //     Authorization: `Bearer ${this.state.currentUser.accessToken}`
    //   }
    // });

    try {
      const response = await axios("/api/v1/subscriptions");
      
      this.setState({
        subs: {
          subList: response.data.data,
          isLoading: false
        }
      });
    } catch (error) {
      this.setState({
        subs: {
          isLoading: false
        }
      })
    }
  };

  render() {
    const contextValue = {
      currentUser: this.state.currentUser,
      subs: this.state.subs
    };

    return (
      <AuthContext.Provider value={contextValue}>
        <div className="content">
          <Layout />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default withRouter(App);
