import { Effect, Actions, ofType } from '@ngrx/effects';
import { Recipe } from '../recipe.model';

import * as RecipeActions from '../store/recipe.actions';
// import 'rxjs/add/operator/switchMap';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';
import * as fromRecipe from '../store/recipe.reducers';


@Injectable()
export class RecipeEffects { 
    @Effect()
    recipeFetch = this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap((action: RecipeActions.FetchRecipes) => {
            console.log('hello');
            return this.httpClient.get<Recipe[]>('https://ng-spice.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json'  
            })              
        }))
        .map(
            (recipes) => {
                console.log(recipes);
              for (let recipe of recipes){
                  if (!recipe['ingredients']){
                      console.log(recipe);
                    recipe['ingredients'] = [];
                  }
              }
              return {
                type: RecipeActions.SET_RECIPES,
                payload: recipes
              };
            }
        );

    @Effect({dispatch: false})
    recipeStore = this.actions$.pipe(
        ofType(RecipeActions.STORE_RECIPES))
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state])=>{
            const req = new HttpRequest('PUT', 'https://ng-spice.firebaseio.com/recipes.json', 
            state.recipes, {reportProgress: true});
                 return this.httpClient.request(req);
        });
    
      

    constructor(private actions$: Actions,
                private httpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>){}
}




