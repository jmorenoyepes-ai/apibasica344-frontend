require("node:dns").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express');
require('dotenv').config();

const conect = require('mongoose');
const clienteController = require('./controllers/cliente.controller');
const productoController = require('./controllers/producto.controller');
const servicioController = require('./controllers/servicio.controller');


const app = express();
const enrutamiento = require('./router/enrutamiento.router')

app.set('view engine', 'ejs');
app.use('/api/v1', enrutamiento);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

function conectarDB(){
    const URI = (process.env.MONGOURI)
    conect.connect(URI);
       
}
conectarDB();

app.get('/', clienteController.home);

app.post('/clientes', clienteController.registrar);


app.get('/listarClientes', function(req,res){
   fetch('https://apibasica344-oljs.onrender.com/clientes')
   .then(response => response.json())
   .then(data => {
       res.render('pages/index2',
           {clientes:data}
       )
   });
});

app.get('/Producto', productoController.consultar);
app.get('/Producto/:id',productoController.consultarId);
app.post('/Producto', productoController.registrar);
app.put('/Producto/:id',productoController.actualizar);
app.delete('/Producto/:id',productoController.eliminar);

app.get('/formularioPro', productoController.formularioPro);


app.get('/servicios', servicioController.consultar);
app.get('/servicios/:id',servicioController.consultarId);
app.post('/servicios', servicioController.registrar);
app.put('/servicios/:id',servicioController.actualizar);
app.delete('/servicios/:id',servicioController.eliminar);

app.get('/formularioSer', servicioController.formularioSer);



app.listen(8000)