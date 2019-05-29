const PubSub = require('../helpers/pub_sub.js')

const Map = function(mymap){
    this.mymap = mymap
}



Map.prototype.render = function(){
    this.mymap = L.map('mapid').setView([50.863, -1.592], 5);

    L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: ' <a href="https://www.openstreetmap.org/"></a> ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/"></a>, ' +
            ' <a href="https://www.mapbox.com/"></a>',
        id: 'mapbox.streets'
    }).addTo(this.mymap);

}

Map.prototype.setPosition = function (long,lat) {
    console.log(this.mymap);
    this.mymap.setView([lat, long], 5);
}

<<<<<<< HEAD

Map.prototype.addMarker = function(lat, long){

    var dinoIcon = L.icon({

=======
Map.prototype.addMarker = function(lat, long){

    var dinoIcon = L.icon({
>>>>>>> parent of 898bc66... added exhibit links to seed file and pops to the map
        iconUrl: 'https://image.flaticon.com/icons/svg/1674/1674556.svg',

        iconSize: [64, 64], // size of the icon
        iconAnchor: [11, 24], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -35] // point from which the popup should open relative to the iconAnchor
    });

<<<<<<< HEAD

    const markerDino = L.marker([lat, long], { icon: dinoIcon }).addTo(this.mymap);
    if(visit !== undefined){
        markerDino.bindPopup(`<h3>If you want to see the ${name} in person, <br>take a look <a href="${visit}">here </a></h3> `)
}
=======
    var markerDino = L.marker([lat, long], { icon: dinoIcon }).addTo(this.mymap);
>>>>>>> parent of 898bc66... added exhibit links to seed file and pops to the map
}

module.exports = Map;
