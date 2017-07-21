import { Component, OnInit } from '@angular/core';
import { Address } from '../latlng.model';
import { Router } from '@angular/router';
import { SaveService } from '../save.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.sass'],
  providers: [SaveService]
})

export class AddressesComponent implements OnInit {
  addresses: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private saveService: SaveService){}

  ngOnInit(){
    this.addresses = this.saveService.getAddresses();
  }

  beginDeletingAddress(clickedAddress) {
    this.saveService.deleteAddress(clickedAddress);
  }
}
