import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { geoKey } from './api-keys';

@Injectable()
export class GeocodeService {

  constructor(private http: Http) { }

  results: Observable<any>;

  geocodeAddress(fullAddress: string) {
    this.results = this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${geoKey}&address=${fullAddress}`);
    return this.results;
    };
  }
