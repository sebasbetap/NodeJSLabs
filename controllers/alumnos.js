'use strict'

const { validationResult } = require('express-validator');

let Alumnos = require('../models/alumnos');

let controller = {

    alumnos: function(req, res) {

            Alumnos.find({}).exec( (err, alumnos) => {
                if(err) return res.status(500).json({status: 500, message: err});
                if(!alumnos) return res.status(200).json({status: 200, message:"No hay alumnos por listar"});

                return res.status(200).json({
                    status: 200,
                    message: "Detalle de alumno",
                    data: alumnos
                });
            });
        },

    alumno: function(req, res){

        let n_lista = req.params.n_lista;
        
        Alumnos.findOne({n_cuenta: n_lista}).exec( (err, alumno) => {
                if(err) return res.status(500).json({status: 500, message: err});
                if(!alumno) return res.status(200).json({status: 200, message:"No existe el alumno."});

                return res.status(200).json({
                    status:200,
                    message: "Detalle de alumno",
                    data: alumno
                });
            });
    },

    crear_alumno: function(req, res) {

        //Validamos los datos que se envian al endpoint
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        let user_info = req.body;
        console.log(user_info);

        // let alumnos_model = new AlumnosModel();

        // alumnos_model.n_cuenta = new_alumno.n_cuenta;
        // alumnos_model.nombre = new_alumno.nombre;
        // alumnos_model.edad = new_alumno.edad;
        // alumnos_model.genero = new_alumno.genero;

        // alumnos_model.save((err, alumnoStored) => {
        //     if(err) return res.status(500).json({message:"Error en el proceso de creación"});
        //     if(!alumnoStored) return res.status(200).json({message:"No se almacenó el alumno."})

        //     return res.status(200).json({
        //         message: "Alumno registrado"
        //     });
        // });
    }

    // },

    // update_alumno: function(req, res) {

    //     let update_alumno = req.body;
    //     let n_cuenta = req.params.n_cuenta;

    //     let update_data = {

    //         nombre = update_alumno.nombre,
    //         edad = update_alumno.edad,
    //         genero = update_alumno.genero,
    //     };

    //     AlumnosModel.findOneAndUpdate({n_cuenta:n_cuenta}, update_data, {new:true}, (err, updateAlumno) => {
    //         if(err) return res.status(500).json({message:"Error en el proceso de actualización"});
    //         if(!updateAlumno) return res.status(200).json({message:"No existe el alumno."})

    //         return res.status(200).json({
    //             message: "Alumno actualizado",
    //             data: updateAlumno
    //         });
    //     });
    // },

    // delete_alumno: function(req, res) {

    }

module.exports = controller;