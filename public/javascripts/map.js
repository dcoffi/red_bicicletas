var map = L.map('map').setView([8.56430714840492, -71.2105544185014], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

$.ajax({
    dataType:"json",
    url: "api/bicicletas",
    success: function(result){
       // console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion,{title:`${bici.id},${bici.color}`}).addTo(map);
        })
    }
});

