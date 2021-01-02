import { Component, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    
   }

  ngAfterViewInit(): void {
    let id_token = (<any>window).id_token;
    if(!id_token) {
      id_token = JSON.parse(<string>window.localStorage.getItem('auth'))?.credential?.oauthIdToken
    }
    if(!!id_token) {      
    this.fireAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(id_token)).then(user =>{
      
      window.localStorage.setItem('auth', JSON.stringify(user));
      this.router.navigate(['secure','land']);
    });
  }
  }

  handleGoogleLogin() {
    const redirect_uri = window.location.origin + '/';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email&access_type=online&` +
      `response_type=id_token&nonce=1234&state=state_parameter_passthrough_value&` +
      `redirect_uri=${redirect_uri}&` +
      `client_id=553720450462-lsd2dukcb29ck3gbm5uuf3e97a8blal7.apps.googleusercontent.com`;
    window.location.href = url;
    // this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data=>{
      
    //   window.localStorage.setItem('auth', JSON.stringify(data));
    //   this.router.navigate(['secure','land']);
    // });
  }

}
