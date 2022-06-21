const Router = require('express').Router;

const apiRouter = Router();
const authRouter = require('./auth-router');
const advertRouter = require('./advertisements');
const usersRouter = require('./users');

apiRouter.use('/auth', authRouter);
apiRouter.use('/adverts', advertRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;