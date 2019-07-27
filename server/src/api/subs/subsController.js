// import axios from "axios";

// export const getSubs = async (req, res, next) => {

// }

const { google } = require("googleapis");
const keys = require("../../../config/keys");

const oauth2Client = new google.auth.OAuth2(
  keys.youtubeClientID,
  keys.youtubeClientSecret,
  "http://localhost:5000/auth/youtube/callback"
);

export const getSubs = async (req, res, next) => {
  let subs;
  let youtube;

  // TODO: check if this object is already populated with its values.
  oauth2Client.credentials = {
    access_token: req.user.accessToken,
    refresh_token: req.user.refreshToken
  };

  // init the youtube API library
  // if(youtube === null) {
  youtube = google.youtube({
    version: "v3",
    auth: oauth2Client
  });
  // }

  try {
    subs = await youtube.subscriptions.list({
      part: "snippet",
      mine: true,
      order: "alphabetical",
      maxResults: 25,
      headers: {}
    });
  } catch (error) {
    next(error);
  }

  res.status(200).json(subs);
};

// ------ Maybe use googles client library https://github.com/googleapis/google-api-nodejs-client
// maybe passport is already handling googles client library job...

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
