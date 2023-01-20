import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
export class data {
  name: string;
  description:string;
  flickr_images:string;
  constructor(
    name: string,
  description:string,
  flickr_images:string,
  ){
    this.name = name;
    this.description = description;
    this.flickr_images = flickr_images;
  }
}
