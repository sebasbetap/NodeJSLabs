'use strict'
const jwt = require('jsonwebtoken');

let Sessions = require('../models/sessions');

const middlewares = {
    userProtectUrl: function(req, res, next){
        
        const token = req.headers['access-token'];

        if (token) {
            jwt.verify(token, 'urvQsM8jmteJGxNQXsS32EdNnHHJ2LR3o2L9GkhBX7RtCcqa6k', (err, decoded) => {
                if (err) {
                    return res.status(403).json({message: "Token inválido."})
                } else {
                    req.decoded = decoded;

                    Sessions.findOne({user_id: req.decoded.user_id, jwt: token}).exec((err, session) => {
                        if (err) return res.status(500).send({message: "Error al devolver los datos."});
                        if (!session) return res.status(404).send({message: "Los datos de autenticación no son válidos."});
                        next();
                    });
                }
            });
        } else {
            res.status(403).send({
                message: "Token no valido."
            });
        }
    }
};

module.exports = middlewares;