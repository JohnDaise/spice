import { Component, OnInit } from '@angular/core';
// import { Response } from '@angular/http';


// import { HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>; 

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  // isAuthenticated(){
  //   return this.authService.isAuthenticated();
  // }

  onStoreData(){
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onGetData(){
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }


  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
  }

}
