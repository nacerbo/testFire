import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const config = {
    apiKey: "AIzaSyC6TnmBIjEhLQaAdwiG8J5mjN_T8ZZOsiI",
    authDomain: "testfire-f205e.firebaseapp.com",
    databaseURL: "https://testfire-f205e.firebaseio.com",
    projectId: "testfire-f205e",
    storageBucket: "testfire-f205e.appspot.com",
    messagingSenderId: "232626622300"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
