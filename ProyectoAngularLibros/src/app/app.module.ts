import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './Components/libro/libro.component';

import { ImageUploadModule } from 'angular2-image-upload'


@NgModule({
  declarations: [
    AppComponent,
    LibroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
