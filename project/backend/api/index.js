const Router = require('express').Router;

const apiRouter = Router();
const authRouter = require('./auth-router');
const advertRouter = require('./advertisements');

apiRouter.use('/auth', authRouter);
apiRouter.use('/adverts', advertRouter);

module.exports = apiRouter;