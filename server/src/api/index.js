// import subsRoutes from './subs/subsRoutes';
// import categoryRoutes from './category/categoryRoutes';
import passport from 'passport';

export default app => {
  // app.use('/', (req, res) => res.send('hello worldsss'));
  // app.use('/api/v1/category', categoryRoutes);
  // app.use('/api/v1/subscriptions', subsRoutes);
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )
}