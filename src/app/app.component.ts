import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { config } from 'config.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedPage = 'recipes';
  
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: config['apiKey'],
      authDomain: "ng-spice.firebaseapp.com"
    });
  }

  onSelect(page: string){
    this.selectedPage = page;
  }

}
