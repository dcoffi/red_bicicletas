var Bicicleta = function(id, color, modelo, ubicacion){
    this.id=id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
}

Bicicleta.prototype.toString= function(){
    return `id: ${this.id} | color: ${this.color}`;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById = function (aBiciId){
    var aBici =Bicicleta.allBicis.find(x=>x.id ==aBiciId);
    if (aBici)
        return aBici;
    else
    throw new Error(`No existe una bicicleta con el id: ${aBiciId}`);
} 

Bicicleta.removeById = function (aBiCid) {
    var idBicicleta = Bicicleta.allBicis.findIndex(x => x.id == aBiCid);

    if (idBicicleta === -1) {
        throw new Error(`No se pudo eliminar: No existe una bicicleta con el id: ${aBiCid}`);
    }

    Bicicleta.allBicis.splice(idBicicleta, 1); // 🔧 CORREGIDO: usar splice, no slice
    
};


var a = new Bicicleta(1,'rojo','urbana', [8.563373537458215, -71.21301132188458]);
var b = new Bicicleta(2,'blanco','urbana',[8.562206520502045, -71.21468502041586]);
Bicicleta.add(a);
Bicicleta.add(b);
module.exports = Bicicleta;