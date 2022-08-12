'use strict'

let WelcomeController = require('../controllers/welcome');

let express = require('express');
let api = express.Router();

api.get('/', WelcomeController.bienvenido);

module.exports = api;