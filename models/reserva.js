var mongoose = require('mongoose');
var moment = require('moment');
const bicicleta = require('./bicicleta');
var Schema = mongoose.Schema;

var reservaSchema = new Schema({
 desde:Date,
 hasta:Date,
 bicicleta: {type:mongoose.Schema.Types.ObjectId,ref:'Bicicleta'}, //al final se la pasa el nombre del modelo
 usuario: {type:mongoose.Schema.Types.ObjectId,ref:'Usuario'}
});

reservaSchema.methods.DiasDeReserva=function(){
return moment(this.hasta).diff(moment(this.desde),'days')+1;
};

module.exports=mongoose.model('Reserva',reservaSchema);