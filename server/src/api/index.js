// import subsRoutes from './subs/subsRoutes';
// import categoryRoutes from './category/categoryRoutes';
import passport from 'passport';

export default (app) => {
  // app.use('/', (req, res) => res.send('hello worldsss'));
  // app.use('/api/v1/category', categoryRoutes);
  // app.use('/api/v1/subscriptions', subsRoutes);
  app.get(
    '/auth/youtube',
    passport.authenticate('youtube')
  )

  app.get(
    '/auth/youtube/callback',
    passport.authenticate('youtube')
  )
}


export const setupModels = (Sequelize, connection, models) => {
  models.map(model => model(Sequelize, connection))
}
