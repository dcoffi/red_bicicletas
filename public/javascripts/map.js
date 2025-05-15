var map = L.map('map').setView([8.56430714840492, -71.2105544185014], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([8.56430714840492, -71.2105544185014]).addTo(map);
