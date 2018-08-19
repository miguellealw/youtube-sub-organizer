import { Router } from 'express';
import isLoggedIn from '../../middlewares/isLoggedIn';
import fetchYoutubeData from '../../middlewares/fetchYoutubeData';
import passport from 'passport'
import axios from 'axios'

const routes = new Router();

routes.get('/dashboard', isLoggedIn, async (req, res, next) => {
  try {
    res.status(200).send('dashboard...') } catch(err) {
    next(err);
  }
});

routes.get(
  '/subs', 
  isLoggedIn,
  // fetchYoutubeData,
  async (req, res) => {
    const youtubeData = await axios.get('https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2C+contentDetails&mine=true', {
      headers: {
        'Authorization': `Bearer ${req.user.accessToken}`,
        'Access-Control-Allow-Origin': '*'
      }
    });

    // res.status(200).json(youtubeData);
    res.status(200).send(youtubeData);
  })

routes.get('/current_user', (req, res) => {
  res.send(req.user);
})

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/');
})

export default routes;