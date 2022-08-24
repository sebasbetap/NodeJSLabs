'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumnosSchema = Schema({
    n_cuenta: { type: Number, require: true, unique: true},
    nombre: { type: String, require: true},
    edad: { type: Number, require: true},
    genero: { type: String, require: true}
});

module.exports = mongoose.model('alumnos', AlumnosSchema);