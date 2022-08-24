'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnosSchema = Schema({
    // n_cuenta: { type: Number, require: true, unique: true},
    nombre: { type: String, require: true},
    edad: Number,
    genero: String
});

module.exports = mongoose.model('alumnos', AlumnosSchema);