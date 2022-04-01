const Router = require('express').Router();
const mailController = require('../controller/mailer.controller.js');
Router.post('/verify-otp',mailController.mailer);

module.exports = Router;