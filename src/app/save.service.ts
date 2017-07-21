import { Injectable } from '@angular/core';
import { Address } from './latlng.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaveService {
  addresses: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.addresses = af.list('addresses');
  }

  addAddress(newAddress: Address) {
    this.addresses.push(newAddress);
  }

  getAddresses() {
    return this.addresses;
  }

  deleteAddress(selectedAddress) {
    let foundAddress = this.getAddressById(selectedAddress.$key);
    foundAddress.remove();
  }

  getAddressById(addressId: string){
    return this.af.object('addresses/' + addressId);
  }

}
