import React, { Component } from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import SubsList from './components/SubsList';

class App extends Component {
  state = {
    subs: "",
    currentUser: null
  };

  componentDidMount = async () => {
    const currentUser = await axios.get("/api/v1/user/current_user");
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
    // const response = await axios.get('/api/v1/user/subs');
    // console.log(response)

    this.setState({ subs: response.data });
  };

  render() {
    return (
      <div>
        <Navigation currentUser={this.state.currentUser} />
        <h1 className="">YouTube Sub Organizer</h1>

        {!this.state.currentUser && <p>You're not logged in</p>}

        <SubsList subs={this.state.subs} currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
