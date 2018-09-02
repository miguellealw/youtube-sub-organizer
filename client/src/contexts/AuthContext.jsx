import React from 'react';

const AuthContext = React.createContext({
  currentUser: null,
  subs: null
})

export default AuthContext;