import { Component, OnInit } from '@angular/core';
// import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

// import { HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>; 

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  // isAuthenticated(){
  //   return this.authService.isAuthenticated();
  // }

  onStoreData(){
    this.dataStorageService.storeData()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onGetData(){
    this.dataStorageService.getData();
  }


  onLogout(){
    console.log('logout');
    this.authService.logout();
  }

}
