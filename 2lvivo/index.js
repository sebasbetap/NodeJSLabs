const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/libro', (req, res) => {
    console.log(req.body);
    res.send("Mi libro favorito es "+req.body.nombre)
});
app.put('/alumno', (req, res) => {
    console.log(req.body);
    res.send("Alumno actualizado")
});
app.delete('/alumno', (req, res) => {
    console.log(req.body);
    res.send("Alumno eliminado")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

console.log('Hola sebas');