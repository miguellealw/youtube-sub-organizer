import React, { Component } from "react";
import axios from "axios";
import Layout from "./app/Layout";
import AuthContext from "./contexts/AuthContext";

class App extends Component {
  state = {
    subs: {
      isLoading: true,
      subList: null
    },
    currentUser: null
  };

  componentDidMount = async () => {
    const currentUser = await axios.get("api/v1/user/current_user");
    // console.log('currentUser', currentUser)
    // TODO: come up with better way to tell if user is authed
    this.setState({ currentUser: currentUser.data });
    this.fetchYoutubeData();

    // try {
    //   // if(currentUser) {
    //   // }

    // } catch(err) {
    //   console.error('ERROR FETCHING USER', err);
    // }
  };

  fetchYoutubeData = async () => {
    this.setState({
      subs: {
        isLoading: true
      }
    });

    const response = await axios({
      url: `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=25&mine=true&order=alphabetical`,
      method: "get",
      headers: {
        Authorization: `Bearer ${this.state.currentUser.accessToken}`
      }
    });

    // const response = await axios("/api/v1/subscriptions");

    this.setState({ 
      subs: { 
        subList: response.data, 
        isLoading: false 
      } 
    });
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

export default App;
