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

  beginGeocoding(locationToGeocode) {
    this.latAndLng = this.geocodeService.geocode(locationToGeocode);
    console.log(this.latAndLng);
  }


}
