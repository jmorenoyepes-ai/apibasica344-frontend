exports.landing = async (req, res) => {
  res.render('pages/landing', { mensaje: "" });
}

exports.login = async (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;

  if (usuario === "admin" && password === "1234") {
    res.redirect('/inicio');
  } else {
    res.render('pages/landing', { mensaje: "Usuario o contraseña incorrectos" });
  }
}
