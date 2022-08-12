'use strict'

let WelcomeController = require('../controllers/welcome');
let AlumnosController = require('../controllers/alumnos')

let express = require('express');
let api = express.Router();

api.get('/', WelcomeController.bienvenido);

api.get('/alumnos', AlumnosController.list_alumnos);
api.get('/alumnos:n_cuenta', AlumnosController.list_alumno);
api.post('/alumnos', AlumnosController.update_alumno);
api.put('/alumnos:n_cuenta', AlumnosController.list_alumnos);

module.exports = api;