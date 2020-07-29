//APP
//SERVER
//INDEX
//Express framework que va la mano con nodejs y nos ayuda a crear aplicaciones web en menos tiempo y con menos codigo
//Nos proporciona funcionalidades como enrutamiento, opciones para gestionar sesiones,cookies,etc
//Node modules contiene todas las librerias que utilizamos en nuestro proyecto tanto preinstaladas con nodejs como las que intalemos de 
//manera externa
// Nodemon es una libreria que nos resetea el servidor con cada cambio guardado
// para utilizar nodemon hay que añadir esta linea en el package.json
/*
  "scripts": {
      --->  "start": "nodemon app.js"
    },
*/
// y para arrancar el servidor utilizar este comando ( npm start )
// La libreria path a grandes rasgos lo que hace es ayudarnos con las rutas, 
// con el enrutamiento de archivos

//METODO GET A TRAVES DE URL
//METODO POST A TRAVES DE FORMULARIOS -- NO VAN A TRAVES DE LA URL

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
// ('/') => htttp:localhost:3000/sobre
// www.mipaginaweb.com
// request=> req -> peticion por parte del servidor
//response => res -> respuesta por parte del servidor
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Hello Codehouse!');
});

app.get('/sobre', function(req, res) {
    res.send('Hello Sobre Nosotros!');
});



//RECIBIR PARÁMETROS A TRAVES DE LA URL

app.get('productos/:producto1/%:', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
    //req.params recoge los parametros de la URL
   console.log(req.params);
    res.send('He recibido un parámetro')

});


//metodo post/enviar 
app.post('/formulario', function(req, res) {
   
   console.log("post Enviar algo");
   
    //  request=req vamos a pedir los datos del formulario
    // requerimos/pedimos los datos del formulario del action que coincida con este post en concreto
   
    console.log(req.body.Nombre)
    console.log(req.body.Apellido)
   
    res.send('OK');

    //req.body es la peticion que se le hace al body
})


app.listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000!');
});











