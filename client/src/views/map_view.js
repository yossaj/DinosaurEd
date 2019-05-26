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

module.exports = Map;