export default (req, _, next) => {
  // if(req.user) return next();
  if(req.isAuthenticated()) return next();

  // res.redirect('/auth/youtube')
  next({
    status: 401,
    message: 'You Must Login'
  });
}