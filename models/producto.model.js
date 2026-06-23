const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
  precio: { type: Number, required: [true, 'Debes poner un precio ' ]},
  stock: { type: Number, default: 0 }
},{versionKey:false});

module.exports = mongoose.model('Producto', productoSchema);