// import subsRoutes from './subs/subsRoutes';
// import categoryRoutes from './category/categoryRoutes';
import userRoutes from './user/userRoutes';
import passport from 'passport';
// import axios from 'axios';

export default (app) => {
  /* 
  <========================================>
    Regular Routes
  <========================================>
  */
  app.use('/failedLogin', (_, res) => res.send('failed login...') )
  app.use('/home', (_, res) => res.send('This is home') );
  // app.use('/api/v1/category', categoryRoutes);
  // app.use('/api/v1/subscriptions', subsRoutes);
  app.use('/api/v1/user', userRoutes);


  /* 
  <========================================>
    Auth Routes
  <========================================>
  */
  app.get(
    '/auth/youtube',
    passport.authenticate('youtube', {
      scope: ['https://www.googleapis.com/auth/youtube.readonly']
    })
  );
  app.get(
    '/auth/youtube/callback',
    passport.authenticate( 'youtube', { 
        failureRedirect: '/failedLogin', 
        successRedirect: 'http://localhost:3000/' 
      }
    )
  );
}


export const setupModels = (Sequelize, connection, models) => {
  models.map(model => model(Sequelize, connection))
}
