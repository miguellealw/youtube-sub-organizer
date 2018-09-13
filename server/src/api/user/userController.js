// export const getSubs = async (req, res) => {
//   const youtubeData = await axios.get(
//     "https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2C+contentDetails&mine=true",
//     {
//       headers: {
//         Authorization: `Bearer ${req.user.accessToken}`,
//         "Access-Control-Allow-Origin": "*"
//       }
//     }
//   );

//   // res.status(200).json(youtubeData);
//   res.status(200).send(youtubeData);
// };

export const currentUser = async (req, res, next) => {
  console.log('hello from current user')
  // FIXME: Figure out if access token should be sent to client
  /*  
    profileId
    refreshToken
    accessToken?
  */
  try {
    if (req.user) {
      const { dataValues: userData } = req.user;
      const keysToRemove = ["profileId", "refreshToken"];
      const sanitizdedUser = Object.keys(userData).reduce((cleanUser, curr) => {
        if (!keysToRemove.includes(curr)) {
          cleanUser[curr] = userData[curr];
        }

        return cleanUser;
      }, {});
      console.log("sanitizedUser", sanitizdedUser);
      res.status(200).json(sanitizdedUser);
      // res.send(req.user);
    }
    res.status(401).json(null)
  } catch (err) {
    console.err(err);
    next(err);
  }
};

export const logout = (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
};
