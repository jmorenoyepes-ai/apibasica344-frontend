const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'Se te olvido ingresar el nombre'] 
},
  email: { 
    type: String, 
    required: [true, 'Debes ingresar el email' ],
    unique: [true, 'Ese correo ya existe , debe ingresar otro']
 },
  telefono: { 
    type: String 
}
},{versionKey:false});

module.exports = mongoose.model('clientes', clienteSchema);
 
