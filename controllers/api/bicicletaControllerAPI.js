var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = async function(req,res,next){
   try {
      const bicicletas = await Bicicleta.find({});
      res.status(200).json({ bicicletas });
    } catch (err) {
      next(err);
    }
};

exports.bicicleta_create = async function(req, res, next) {
  console.log("Datos recibidos:", req.body); // <-- Añade esto

  const lat = parseFloat(req.body.lat);
  const lng = parseFloat(req.body.lng);

  if (isNaN(lat) || isNaN(lng)) {
    return res.status(400).json({ error: "Latitud y longitud inválidas." });
  }

  const bici = new Bicicleta({
    color: req.body.color,
    modelo: req.body.modelo,
    ubicacion: [lat, lng]
  });

  try {
    await bici.save();
    res.status(200).json({ bicicleta: bici });
  } catch (err) {
    next(err);
  }
};



exports.bicicleta_delete = function(req,res){
   Bicicleta.removeById(req.body.id);
   res.status(204).send();
}