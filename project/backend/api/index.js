const Router = require('express').Router;

const apiRouter = Router();
const authRouter = require('./auth-router');

apiRouter.use('/auth', authRouter);

module.exports = apiRouter;