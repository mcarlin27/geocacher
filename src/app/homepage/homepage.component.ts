import { Component, AfterViewInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  providers: [MapService]
})
export class HomepageComponent implements AfterViewInit {

  constructor(private mapService: MapService) { }

  ngAfterViewInit() {
    this.mapService.initMap();
  }


}
