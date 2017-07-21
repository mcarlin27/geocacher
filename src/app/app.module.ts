import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { AgmCoreModule } from '@agm/core';
import { geoKey } from './api-keys';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: geoKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
