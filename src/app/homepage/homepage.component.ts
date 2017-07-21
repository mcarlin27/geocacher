import { Component, AfterViewInit } from '@angular/core';
import { MapService } from '../map.service';
import { GeocodeService } from '../geocode.service';
import { SaveService } from '../save.service';
import { Address } from '../latlng.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  providers: [MapService,
              GeocodeService,
              SaveService]
})
export class HomepageComponent implements AfterViewInit {

  constructor(private mapService: MapService,
              private geocodeService: GeocodeService,
              private saveService: SaveService) { }

  ngAfterViewInit() {
    console.log('hello');
    // this.mapService.initMap();
  }

  latAndLng: any = null;
  lat;
  lng;
  address;
  formattedAddress;

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

  beginReverseGeocoding(latitude, longitude) {
    this.geocodeService.reverseGeocodeAddress(latitude, longitude).subscribe((data) => {
      this.address = data.json().results[0];
      console.log(this.address);
      for (var formatted_address in this.address) {
        if (this.address.hasOwnProperty(formatted_address)) {
          this.formattedAddress = this.address.formatted_address;
        }
      }
    })
  }

  saveGeocachedLocation(latitude, longitude, address){
    let addressToSave = new Address(latitude, longitude, address);
    this.saveService.addAddress(addressToSave);
  }
}
