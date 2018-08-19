import passport from 'passport';
import keys from '../config/keys';
// import userModel from '../src/api/user/userModel';
import { userModel } from './db';

// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const YoutubeV3Strategy = require('passport-youtube-v3').Strategy

/* 
<========================================>
  Serialization and Deserialization
<========================================>
*/
// grab info(id) and put into cookie and send to client
passport.serializeUser((user, done) => {
  done(null, user[0].profileId);
})

// when id comes from client check id from cookie and 
// look for it in DB
passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findOne({ where: { profileId: id } })
    done(null, user)
  } catch (err) {
    done(err, null, { message: 'Can\'t connect to the database 🤬'})
  }
})

/* 
<========================================>
  Youtube Strategy Passport Setup
<========================================>
*/
const youtubeOpts = {
  clientID: keys.youtubeClientID,
  clientSecret: keys.youtubeClientSecret,
  callbackURL: '/auth/youtube/callback',
  scope: ['https://www.googleapis.com/auth/youtube'],
  // authorizationParams: {
  //   access_type: 'offline'
  // }
};

passport.use(
  new YoutubeV3Strategy(
    youtubeOpts, 
    async (accessToken, refreshToken, profile, done) => {
      // Refresh token used to automatically update accessToken when it expires

      try {
        // Create or fetch user from our DB after authed by youtube
        const user = await userModel.findOrCreate({ 
          where: { profileId: profile.id },
          defaults: { 
            name: profile.displayName,
            profileId: profile.id,
            accessToken,
            refreshToken
          }
        })

        // if(user.accessToken !== accessToken) {
        //   // await user.
        // }

        // whatever is passed as second arg will be assigned to req.user
        done(null, user);
      } catch(err) {
        done(err, false);
      }
  }),
);
