const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const controllers = requireDir('./controllers');

/**
 * Auth
 */

routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);

/**
 * ===========
 * Auth routes
 */

routes.use(authMiddleware);

/**
 * Users
 */

routes.put('/users', controllers.userController.update);

/**
 * Tweets
 */

routes.post('/tweets', controllers.tweetController.create);
routes.delete('/tweets/:id', controllers.tweetController.destroy);

/**
 * Likes
 */

routes.post('/like/:id', controllers.likeController.toggle);

module.exports = routes;
