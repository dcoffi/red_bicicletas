var express = require('express');
var router = express.Router();
var bicicletaControllers =require('../../controllers/api/bicicletaControllerAPI');

router.get('/',bicicletaControllers.bicicleta_list);
router.post('/create',bicicletaControllers.bicicleta_create);
router.delete('/delete',bicicletaControllers.bicicleta_delete);

module.exports = router;