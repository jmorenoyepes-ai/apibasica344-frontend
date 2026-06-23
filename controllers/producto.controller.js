const Producto = require('../models/producto.model');

exports.consultar = async (req,res)=>{
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.consultarId = async (req,res)=>{
  try {
    const productos = await Producto.findOne({nombre:req.params.id});
    console.log(productos);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.registrar = async(req,res)=>{
  try {
    let = nuevoProducto={
        nombre:req.body.nombre,
        precio:req.body.precio,
        stock:req.body.stock
    }

    const productos = await Producto.insertOne(nuevoProducto);
    console.log(productos);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.actualizar = async(req,res)=>{
    try {
        let = productoActualizado= req.body
        
        
        const productos = await Producto.updateOne(
                {"nombre": req.params.id},{$set: productoActualizado}
            );

            if (productos.matchedCount === 0) {
                return res.status(404).json({mensaje: 'Producto no encontrado'});
            }

            res.json({mensaje: 'Producto actualizado correctamente'});
        console.log(productos);
        res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.eliminar = async(req,res)=>{
    try {
        const productos = await Producto.deleteOne(
                {"nombre": req.params.id}
            );

            if (productos.deletedCount === 0) {
                return res.status(404).json({mensaje: 'Producto no encontrado'});
            }

            return res.json({mensaje: 'Producto eliminado correctamente'});
            
        console.log(productos);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}