import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from 'module/material.module';
import { AppComponent } from './app.component';
import {PushmenuComponent} from './components/pushmenu/pushmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    PushmenuComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
