import React, { Component } from "react";
import axios from "axios";
// import Navigation from "./components/Navigation";
import SubsList from './components/SubsList';
import Layout from './app/Layout'
import AuthContext from './contexts/AuthContext';

class App extends Component {
  state = {
    subs: "",
    currentUser: null
  };

  componentDidMount = async () => {
    const currentUser = await axios.get("/api/v1/user/current_user");
    // TODO: come up with better way to tell if user is authed
    this.setState({ currentUser: currentUser.data });

    this.fetchYoutubeData();
  };

  fetchYoutubeData = async () => {
    // const response = await axios.get("api/v1/user/subs");
    // console.log("===response===", response);
    const response = await axios({
      // url: `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2C+contentDetails&mine=true`,
      url: `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=25&mine=true&order=alphabetical`,
      method: "get",
      headers: {
        Authorization: `Bearer ${this.state.currentUser.accessToken}`
      }
    });

    this.setState({ subs: response.data });
  };

  render() {
    const contextValue = {
      currentUser: this.state.currentUser,
      subs: this.state.subs
    }
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
