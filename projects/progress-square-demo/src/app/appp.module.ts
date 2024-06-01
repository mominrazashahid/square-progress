import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProgressSquare } from '../../../progress-square/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [ CommonModule,BrowserModule,  BrowserAnimationsModule, ProgressSquare ],
  bootstrap: [AppComponent]
})
export class AppModule { }
