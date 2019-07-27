export const currentUser = async (req, res, next) => {
  // FIXME: Figure out if access token should be sent to client
  /*  
    profileId
    refreshToken
    accessToken?
  */
  try {
    if (req.user) {
      const { dataValues: userData } = req.user;

      // TODO: maybe figure out a better more efficient way of doing this, but this will work for now
      const keysToRemove = ["profileId", "refreshToken"];
      const sanitizdedUser = Object.keys(userData).reduce(
        (cleanUser, currKey) => {
          if (!keysToRemove.includes(currKey)) {
            cleanUser[currKey] = userData[currKey];
          }
          return cleanUser;
        },
        {}
      );

      res.status(200).json(sanitizdedUser);
    }

    // This is causing the 'Cannot set headers after tey are sent to the Client' error
    // res.status(401).json(null);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const logout = (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
};
