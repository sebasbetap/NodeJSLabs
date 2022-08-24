'use strict'

let WelcomeController = require('../controllers/welcome');
let AlumnosController = require('../controllers/alumnos')

const express = require('express');
const api = express.Router();
const { body } = require('express-validator');

api.get('/', WelcomeController.bienvenido);
api.get('/alumnos', AlumnosController.alumnos);
api.get('/alumno/:n_lista', AlumnosController.alumno);
api.post('/alumno', [
    body('genero').not().isEmpty()
], AlumnosController.crear_alumno);
// api.put('/alumnos:n_cuenta', AlumnosController.list_alumnos);

module.exports = api;