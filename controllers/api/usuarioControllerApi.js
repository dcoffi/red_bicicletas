const Usuario = require('../../models/usuario');

// Listar usuarios
exports.usuarios_list = async function(req, res, next) {
  try {
    const usuarios = await Usuario.find({});
    res.status(200).json({ usuarios });
  } catch (err) {
    next(err);
  }
};

// Crear usuario
exports.usuarios_create = async function(req, res, next) {
  try {
    const usuario = new Usuario({ nombre: req.body.nombre });
    await usuario.save();
    res.status(200).json(usuario);
  } catch (err) {
    next(err);
  }
};

// Reservar bicicleta
exports.usuarios_reservar = async function(req, res, next) {
  try {
    const usuario = await Usuario.findById(req.body.id);
    console.log(usuario);
    await usuario.reservar(req.body.bici_id, req.body.desde, req.body.hasta);
    console.log('Reserva!!!');
    res.status(200).send();
  } catch (err) {
    next(err);
  }
};
