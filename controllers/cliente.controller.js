const Cliente = require('../models/cliente.model');

exports.home = async(req,res)=>{
  res.render('pages/index');
}

exports.formulario = async (req,res)=>{
  res.render('pages/registrarcliente', {mensaje:""});
}

exports.consultar = async (req,res)=>{
  try {
    const clientes = await Cliente.find();
    // res.json(clientes);
    res.render('pages/index2',{clientes:clientes})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.consultarId = async (req,res)=>{
  try {
    const clientes = await Cliente.findOne({email:req.params.id});
    console.log(clientes);
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.registrar = async(req,res)=>{
  try {
    let = nuevoCliente={
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono
    }

    const clientes = await Cliente.insertOne(nuevoCliente);
    console.log(clientes);
    // res.json(clientes);
    res.render('pages/registrarcliente', {mensaje:"registro exitoso"});

  } catch (error) {
    // res.status(500).json({ error: error.message });
    res.render('pages/registrarcliente', {mensaje:"Error en el registro"});

  }
}

exports.actualizar = async(req,res)=>{
    try {
        let = clienteActualizado= req.body
        
        
        const clientes = await Cliente.updateOne(
                {"email": req.params.id},{$set: clienteActualizado}
            );

            if (clientes.matchedCount === 0) {
                return res.status(404).json({mensaje: 'Cliente no encontrado'});
            }

            res.json({mensaje: 'Cliente actualizado correctamente'});
        console.log(clientes);
        res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.eliminar = async(req,res)=>{
    try {
        const clientes = await Cliente.deleteOne(
                {"email": req.params.id}
            );

            if (clientes.matchedCount === 0) {
                return res.status(404).json({mensaje: 'Cliente no encontrado'});
            }

            res.json({mensaje: 'Cliente eliminado correctamente'});
        console.log(clientes);
        res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
/**
en lugar de usar
module.exports para exportar
puede poner la palabra exports directamente en la funcion o variable
que deseo exportar

**/
