'use strict'
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

let Usuarios = require('../models/usuarios');
let Sessions = require('../models/sessions');

let controller = {

    login: function(req, res) {

        //Validamos los datos que se envían al endpoint
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        let login_info = req.body;

        Usuarios.findOne({mail: login_info.mail, pass: login_info.pass}).exec( (err, usuario) => {
            if(err) return res.status(500).json({status: 500, message: err});
            if(!usuario) return res.status(200).json({status: 200, message:"Los datos no son válidos."});

            const payload = {
                user_id: usuario.id
            };

            const access_token = jwt.sign(payload, 'urvQsM8jmteJGxNQXsS32EdNnHHJ2LR3o2L9GkhBX7RtCcqa6k', {
                expiresIn: '1d'
            });

            let update = {
                user_id: usuario.id,
                jwt: access_token
            };

            Sessions.findOneAndUpdate({user_id: usuario.id}, update, {upsert: true, new: true}, (err, sessionsUpdate) => {
                if (err) return res.status(500).send({message:err});         
                
                if(!sessionsUpdate) return res.status(404).send({message: "Datos erróneos."});

                return res.status(200).json({
                    status: 200,
                    message: "Autenticación correcta.",
                    token: access_token
                });
            });
        });
            
    },

    logout: function(req, res){
            
        console.log(req.decoded);
        Sessions.findOneAndRemove({user_id: req.decoded.user_id}, (err, usuarioDeleted) => {
            if (err) return res.status(500).send({message:err}); 
            if(!usuarioDeleted) return res.status(404).send({message: "Datos erróneos."});

            return res.status(200).send({
                message: "Sesión cerrada exitosamente"
            });
        });
    }
}

module.exports = controller;