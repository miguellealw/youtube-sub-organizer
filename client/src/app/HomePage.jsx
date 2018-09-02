import React, { Component } from 'react';
import AuthContext from '../contexts/AuthContext';
import SubsList from '../components/SubsList';


class HomePage extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authData => (
          <div>
            <h1 className="title is-1 has-text-dark">YouTube Sub Organizer</h1>

            {!authData.currentUser && <p>You're not logged in</p>}

            <SubsList subs={authData.subs} currentUser={authData.currentUser} />
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default HomePage;