const Producto = require('../models/producto.model');

exports.catalogo = async (req,res)=>{
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.formularioPro = async (req,res)=>{
  res.render('pages/registrarproducto', {mensaje:""});
}

exports.consultar = async (req,res)=>{
  try {
    const productos = await Producto.find();
    // res.json(productos);
    res.render('pages/index3',{productos:productos, mensaje: ""})

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
    res.render('pages/registrarproducto', {mensaje:"registro exitoso"});

  } catch (error) {
    // res.status(500).json({ error: error.message });
    res.render('pages/registrarproducto', {mensaje:"Error en el registro"});

  }
}

exports.actualizar = async(req,res)=>{
    try {
        let productoActualizado = req.body

        const productos = await Producto.updateOne(
                {"nombre": req.params.id},{$set: productoActualizado}
            );

            if (productos.matchedCount === 0) {
                const listaProductos = await Producto.find();
                return res.render('pages/index3', {productos: listaProductos, mensaje: "Producto no encontrado"});
            }

        const listaProductos = await Producto.find();
        res.render('pages/index3', {productos: listaProductos, mensaje: "Producto actualizado correctamente"});
  } catch (error) {
    const listaProductos = await Producto.find();
    res.render('pages/index3', {productos: listaProductos, mensaje: "Error al actualizar el producto"});
  }
}

exports.eliminar = async(req,res)=>{
    try {
        const productos = await Producto.deleteOne(
                {"nombre": req.params.id}
            );

            if (productos.deletedCount === 0) {
                const listaProductos = await Producto.find();
                return res.render('pages/index3', {productos: listaProductos, mensaje: "Producto no encontrado"});
            }

        const listaProductos = await Producto.find();
        res.render('pages/index3', {productos: listaProductos, mensaje: "Producto eliminado correctamente"});
  } catch (error) {
    const listaProductos = await Producto.find();
    res.render('pages/index3', {productos: listaProductos, mensaje: "Error al eliminar el producto"});
  }
}