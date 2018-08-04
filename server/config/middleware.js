import passport from 'passport';
import keys from '../config/keys';

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const YoutubeV3Strategy = require('passport-youtube-v3').Strategy

module.exports = (app) => {

  // Setup google strategy
  passport.use(
    new YoutubeV3Strategy({
      clientID: keys.youtubeClientID,
      clientSecret: keys.youtubeClientSecret,
      callbackURL: '/auth/youtube/callback',
      scope: ['https://www.googleapis.com/auth/youtube.readonly']
    }, (accessToken, refreshToken, profile, done) => {
      // Refresh token used to automatically update accessToken when it expires
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }), 
  );
}