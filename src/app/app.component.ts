import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAj5yKna54-oeEokMKx5Q8Cme_7gpAECd8",
      authDomain: "angular-auth-8b5d0.firebaseapp.com"
    });
  }
}
