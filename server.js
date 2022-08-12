'use strict'
let mongoose = require('mongoose');
let app = require('./app');
let port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/${dbname}', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Conexión a la base de datos establecida con éxito.")

            let server = app.listen(port, () => {
                console.log("Servidor escuchando en "+ port);
            });

            server.timeout = 120000;

        })
        .catch(err => console.log(err));
