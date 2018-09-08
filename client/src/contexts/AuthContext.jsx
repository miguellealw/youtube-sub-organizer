import React from 'react';

const AuthContext = React.createContext({
  currentUser: null,
  subs: {
    isLoading: false,
    subList: null
  }
})

export default AuthContext;