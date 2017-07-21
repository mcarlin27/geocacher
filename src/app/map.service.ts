import { Injectable } from '@angular/core';
import { geoKey } from './api-keys';
import { Http, Response } from '@angular/http';
import {} from '@types/googlemaps';

const getScriptSrc = (initMap) => {
  return `https://maps.googleapis.com/maps/api/js?key=` + geoKey + `&callback=$initMap`;
}


@Injectable()
export class MapService {

  constructor(private http: Http) { }

  initMap() {
    var center = new google.maps.LatLng(43.071584, -89.380120);
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: center
    });
    return map;
  }

}





// User.prototype.dropPin = function(lngLatArray) {
//   lngLatArray.forEach(function(lngLat) {
//     var position = new google.maps.LatLng(parseFloat(lngLat.latitude), parseFloat(lngLat.longitude));
//     new google.maps.Marker({
//       map: map,
//       position: position
//     });
//   });
// };
