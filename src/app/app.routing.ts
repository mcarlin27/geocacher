import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddressesComponent } from './addresses/addresses.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'addresses',
    component: AddressesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
