const Servicio = require('../models/servicio.model');

exports.formularioSer = async (req,res)=>{
  res.render('pages/registrarservicio', {mensaje:""});
}

exports.consultar = async (req,res)=>{
  try {
    const servicios = await Servicio.find();
    // res.json(servicios);
    res.render('pages/index4',{servicios:servicios})

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.consultarId = async (req,res)=>{
  try {
    const servicios = await Servicio.findOne({nombre:req.params.id});
    console.log(servicios);
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.registrar = async(req,res)=>{
  try {
    let = nuevoServicio={
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        duracionMinutos:req.body.duracionMinutos,
        precio:req.body.precio,
        categoria:req.body.categoria
    }

    const servicios = await Servicio.insertOne(nuevoServicio);
    console.log(servicios);
    res.render('pages/registrarservicio', {mensaje:"registro exitoso"});

  } catch (error) {
    // res.status(500).json({ error: error.message });
    res.render('pages/registrarservicio', {mensaje:"Error en el registro"});

  }
}

exports.actualizar = async(req,res)=>{
    try {
        let = servicioActualizado= req.body
        
        
        const servicios = await Servicio.updateOne(
                {"nombre": req.params.id},{$set: servicioActualizado}
            );

            if (servicios.matchedCount === 0) {
                return res.status(404).json({mensaje: 'Servicio no encontrado'});
            }

            res.json({mensaje: 'Servicio actualizado correctamente'});
        console.log(servicios);
        res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.eliminar = async(req,res)=>{
    try {
        const servicios = await Servicio.deleteOne(
                {"nombre": req.params.id}
            );

            if (servicios.matchedCount === 0) {
                return res.status(404).json({mensaje: 'Servicio no encontrado'});
            }

            res.json({mensaje: 'Servicio eliminado correctamente'});
        console.log(servicios);
        res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}