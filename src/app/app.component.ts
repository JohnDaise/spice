import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedPage = 'recipes';
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAABDTnRa2us0tIwwXx5xSt60TRIIGy-To",
      authDomain: "ng-spice.firebaseapp.com"
    });
  }

  onSelect(page: string){
    this.selectedPage = page;
  }

}
