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
        let clienteActualizado = req.body

        const clientes = await Cliente.updateOne(
                {"email": req.params.id},{$set: clienteActualizado}
            );

            if (clientes.matchedCount === 0) {
                const listaClientes = await Cliente.find();
                return res.render('pages/index2', {clientes: listaClientes, mensaje: "Cliente no encontrado"});
            }

        const listaClientes = await Cliente.find();
        res.render('pages/index2', {clientes: listaClientes, mensaje: "Cliente actualizado correctamente"});
  } catch (error) {
    const listaClientes = await Cliente.find();
    res.render('pages/index2', {clientes: listaClientes, mensaje: "Error al actualizar el cliente"});
  }
}

exports.eliminar = async(req,res)=>{
    try {
        const clientes = await Cliente.deleteOne(
                {"email": req.params.id}
            );

            if (clientes.deletedCount === 0) {
                const listaClientes = await Cliente.find();
                return res.render('pages/index2', {clientes: listaClientes, mensaje: "Cliente no encontrado"});
            }

        const listaClientes = await Cliente.find();
        res.render('pages/index2', {clientes: listaClientes, mensaje: "Cliente eliminado correctamente"});
  } catch (error) {
    const listaClientes = await Cliente.find();
    res.render('pages/index2', {clientes: listaClientes, mensaje: "Error al eliminar el cliente"});
  }
}
/**
en lugar de usar
module.exports para exportar
puede poner la palabra exports directamente en la funcion o variable
que deseo exportar

**/
