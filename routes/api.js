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
    body('n_cuenta').not().isEmpty(),
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty(),
    body('genero').not().isEmpty()
], AlumnosController.crear_alumno);

api.put('/alumno/:n_cuenta', [
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty(),
    body('genero').not().isEmpty()
], AlumnosController.update_alumno);

module.exports = api;