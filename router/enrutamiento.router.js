const express = require('express')
const clienteController = require('../controllers/cliente.controller')
const router = express.Router();


router.get('/clientes', clienteController.consultar);
router.get('/clientes/:id',clienteController.consultarId);
router.post('/clientes', clienteController.registrar);
router.put('/clientes/:id',clienteController.actualizar);
router.delete('/clientes/:id',clienteController.eliminar);
router.get('/formulario', clienteController.formulario);

module.exports = router;