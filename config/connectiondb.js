const mongoose = require("mongoose");
var conexion = "";
try {
  // const URI = process.env.MONGOURI;
	const URI = (process.env.MONGOURI)


  conexion = mongoose.connect(URI);
  console.log("Conectado a la base de datos")
} catch (err) {
  console.log(err);
}

module.exports = conexion;