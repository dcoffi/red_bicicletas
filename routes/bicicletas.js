var express = require('express');
var router = express.Router();
var bicicletaControllers =require('../controllers/bicicleta');
const Bicicleta = require('../models/bicicleta');

router.get('/',bicicletaControllers.bicicleta_list);
router.get('/create',bicicletaControllers.bicicleta_create_get);
router.post('/create',bicicletaControllers.bicicleta_create_post);
router.get('/:id/update',bicicletaControllers.bicicleta_update_get);
router.post('/:id/update',bicicletaControllers.bicicleta_update_post);
router.post('/:id/delete',bicicletaControllers.bicicleta_delete_post);

module.exports =router;