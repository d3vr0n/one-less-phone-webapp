import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import firebase from 'firebase/app';
import { CallLog } from 'src/app/interfaces/calllog.interface';
import { SMS } from 'src/app/interfaces/sms.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  smsList : Array<SMS> = [];
  callList : Array<CallLog> = [];
  constructor(private db: AngularFirestore, private fireAuth: AngularFireAuth, private router: Router,
    private _notiSvc: NotificationsService) { }

  ngOnInit() {
    this.fireAuth.currentUser.then(async (user) => {
      if(!user) { this._notiSvc.warn('log in first'); this.router.navigate(['login']);return; }

        let collSMSpath = `user/${user?.uid}/sms`;
        this.db.collection(collSMSpath).valueChanges().subscribe(snapshot =>{
          this.smsList.length = 0;
          snapshot.forEach(doc => {
            this.smsList.push(<SMS>doc);
            this.smsList.sort((a,b) => +b.date - +a.date)
          });
  
        });
        let collCallLogpath = `user/${user?.uid}/calllog`;
        this.db.collection(collCallLogpath).valueChanges().subscribe(snapshot =>{
          this.callList.length = 0;
          snapshot.forEach(doc => {
            let _d = new Date(parseFloat(String((<CallLog>doc).date)));
            (<CallLog>doc).date_str = `${_d.toLocaleDateString()} ${_d.toLocaleTimeString().split(' ')[0]}`;
            this.callList.push(<CallLog>doc);
            this.callList.sort((a,b) => +b.date - +a.date)
          });
  
        });

      
    });
  }

}
