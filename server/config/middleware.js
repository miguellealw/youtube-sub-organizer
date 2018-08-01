import passport from 'passport';
import keys from '../config/keys';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (app) => {

  // Setup google strategy
  passport.use(
    new GoogleStrategy({
      clientID: keys.youtubeClientID,
      clientSecret: keys.youtubeClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken) => {
      console.log(accessToken);
    }), 
  );
}