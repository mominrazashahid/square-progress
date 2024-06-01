import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressSquareComponent } from 'ng-progress-square';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [ CommonModule,BrowserModule,  BrowserAnimationsModule, ProgressSquareComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
