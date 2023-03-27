const usersRoutes = require('./usersRoutes.ts');

const routerApi = (app) => {
  app.use('users', usersRoutes);
};

module.exports = routerApi;
