import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { geoKey } from './api-keys';

@Injectable()
export class GeocodeService {

  constructor(private http: Http) { }


  geocode(fullAddress: string) {
    let address: any;
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${geoKey}&address=${fullAddress}`).subscribe((data) => {
      address = data.json().results[0].geometry.location;
      console.log(data.json().results[0].geometry.location);
    });
    return address;
  }

}
