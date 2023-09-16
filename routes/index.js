const routes = require('express').Router();
const mainController = require('../controllers/lesson1');
 
routes.get('/', mainController.route)


module.exports = routes;