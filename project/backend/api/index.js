const Router = require('express').Router;

const apiRouter = Router();
const authRouter = require('./auth-router');
const advertRouter = require('./advertisements');
const usersRouter = require('./users');
const favsRouter = require('./favs');
const appointmentsRouter = require('./appointments');

apiRouter.use('/auth', authRouter);
apiRouter.use('/favs', favsRouter);
apiRouter.use('/adverts', advertRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/appointments', appointmentsRouter);


module.exports = apiRouter;