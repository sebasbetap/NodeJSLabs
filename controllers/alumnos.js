'use strict'

let AlumnosModel = require('../models/alumnos');

let controller = {

    list_alumnos: function(req, res) {
        try {

            console.log(req);
            let n_cuenta = req.params.n_cuenta;

            AlumnosModel.findOne({n_cuenta:n_cuenta}, (err, alumnoslist) => {
                if(err) return res.status(500).json({message:"Error buscando el alumno"});
                if(!alumnoslist) return res.status(200).json({message:"No existe el alumno."})

                return res.status(200).json({
                    message: "Detalle de alumno",
                    data: alumnoslist
                });

            });
        } catch (error) {
            return res.status(500).json({
                error: error
            })
        }
    },

    create_alumno: function(req, res) {

        let new_alumno = req.body;

        let alumnos_model = new AlumnosModel();

        alumnos_model.n_cuenta = new_alumno.n_cuenta;
        alumnos_model.nombre = new_alumno.nombre;
        alumnos_model.edad = new_alumno.edad;
        alumnos_model.genero = new_alumno.genero;

        alumnos_model.save((err, alumnoStored) => {
            if(err) return res.status(500).json({message:"Error en el proceso de creación"});
            if(!alumnoStored) return res.status(200).json({message:"No se almacenó el alumno."})

            return res.status(200).json({
                message: "Alumno registrado"
            });
        });

    },

    update_alumno: function(req, res) {

        let update_alumno = req.body;
        let n_cuenta = req.params.n_cuenta;

        let update_data = {

            nombre = update_alumno.nombre,
            edad = update_alumno.edad,
            genero = update_alumno.genero,
        };

        AlumnosModel.findOneAndUpdate({n_cuenta:n_cuenta}, update_data, {new:true}, (err, updateAlumno) => {
            if(err) return res.status(500).json({message:"Error en el proceso de actualización"});
            if(!updateAlumno) return res.status(200).json({message:"No existe el alumno."})

            return res.status(200).json({
                message: "Alumno actualizado",
                data: updateAlumno
            });
        });
    },

    delete_alumno: function(req, res) {

    }


}