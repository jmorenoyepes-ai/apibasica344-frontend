const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: [true, 'Olvidaste ponerle un nombre' ]},
  descripcion: { type: String },
  duracionMinutos: { type: Number, required: [true, 'Debes digitar cuantos minutos dura'] },
  precio: { type: Number, required: [true, 'Olvidaste digitar el precio'] },
  categoria: { 
    type: String, 
    enum: ['corte', 'tintura', 'peinado', 'tratamiento', 'barberia', 'otros'],
    required: [true, 'La categoria es invalida']} 
  });{versionKey:false};

module.exports = mongoose.model('ServicioPeluqueria', servicioSchema);

