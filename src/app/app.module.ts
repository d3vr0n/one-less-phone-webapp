import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SecureModule } from './secure/secure.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVk13GmbxGayhLywy6BfUJatjyKkFfT1k",
  authDomain: "one-less-phone.firebaseapp.com",
  databaseURL: "https://one-less-phone-default-rtdb.firebaseio.com",
  projectId: "one-less-phone",
  storageBucket: "one-less-phone.appspot.com",
  messagingSenderId: "553720450462",
  appId: "1:553720450462:web:9b92645d17100c7f315a8f"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SecureModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
