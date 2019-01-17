import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import  'rxjs/add/operator/switchMap';
import  'rxjs/add/operator/mergeMap';

import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNUP),
    map((action: AuthActions.TrySignup) => {
      return action.payload;
    }))
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

    @Effect()
    authSignin = this.actions$.pipe(
      ofType(AuthActions.TRY_SIGNIN),
      map((action: AuthActions.TrySignin) => {
        return action.payload;
      }))
      .switchMap((authData: {username: string, password: string}) => {
        return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
      })
      .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
      })
      .mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGNIN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ];
      });


    constructor(private actions$: Actions,
                private router: Router){
    }

}



// @Injectable()
// export class MyEffects {
//   @Effect()
//   someEffect$: Observable<Action> = this.actions$.pipe(
//     ofType(UserActions.LOGIN), // use the pipeable ofType operator
//     map(() => new AnotherAction())
//   );
 
//   constructor(private actions$: Actions) {}
// }
