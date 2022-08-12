'use strict'

var controller = {
    bienvenido: function(req, res){
        return res.status(200).json({
            status: 200,
            message: "Api de manejo de alumnos"
        });
    }
};

module.exports = controller;