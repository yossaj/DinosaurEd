const PubSub = require('../helpers/pub_sub.js')

const Map = function(){

}


Map.prototype.render = function(){
    var mymap = L.map('mapid').setView([50.863, -1.592], 5);

    L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: ' <a href="https://www.openstreetmap.org/"></a> ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/"></a>, ' +
            ' <a href="https://www.mapbox.com/"></a>',
        id: 'mapbox.streets'
    }).addTo(mymap);
    
     
}

module.exports = Map;