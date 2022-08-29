'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosSchema = Schema({
    mail: { type: String, require: true, unique: true},
    pass: { type: String, require: true}
});

module.exports = mongoose.model('usuarios', UsuariosSchema);