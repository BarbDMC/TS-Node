const usersRoutes = require('./users.router');

export const routerApi = (app) => {
  app.use('/users', usersRoutes);
};
