import { Component, AfterViewInit } from '@angular/core';
import { MapService } from '../map.service';
import { GeocodeService } from '../geocode.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  providers: [MapService, GeocodeService]
})
export class HomepageComponent implements AfterViewInit {

  constructor(private mapService: MapService,
              private geocodeService: GeocodeService) { }

  ngAfterViewInit() {
    console.log('hello');
    // this.mapService.initMap();
  }

  latAndLng: any = null;
  lat;
  lng;

  beginGeocoding(locationToGeocode) {
    this.geocodeService.geocodeAddress(locationToGeocode).subscribe((data) => {
      this.latAndLng = data.json().results[0].geometry.location;
    console.log(this.latAndLng);
    for (var lat in this.latAndLng) {
      if (this.latAndLng.hasOwnProperty(lat)) {
        this.lat = this.latAndLng.lat;
      }
    }
    for (var lng in this.latAndLng) {
      if (this.latAndLng.hasOwnProperty(lng)) {
        this.lng = this.latAndLng.lng;
      }
    }
    });
  }
}
