import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/RX';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService){}

    storeData(){
        // const headers = new HttpHeaders().set('Authorization', 'Bearer tokenadfdsf');
        // //if using JWT, could use this approach to append headers 

        // return this.httpClient.put('https://ng-spice.firebaseio.com/recipes.json', 
        // this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token)
        //     // headers: headers
        //     // headers: new HttpHeaders().set('Authorization', 'Bearer tokenadfdsf')
        // });//use puts bc it will override the database on backend

        const req = new HttpRequest('PUT', 'https://ng-spice.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes(), {reportProgress: true});
        // this.recipeService.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)});
       return this.httpClient.request(req);
    } //this section remais the same just use 'httpClient' instead of 'http'
    

    getData(){
        // const token = this.authService.getToken();
        //  this.http.get('https://ng-spice.firebaseio.com/recipes.json?auth=' + token)
        //  this.httpClient.get<Recipe[]>('https://ng-spice.firebaseio.com/recipes.json?auth=' + token)
         this.httpClient.get<Recipe[]>('https://ng-spice.firebaseio.com/recipes.json', {
             observe: 'body',
             responseType: 'json'  //'test' ( json most common response) or 'arraybuffer'
         })
            .map(
                // (response: Response) => {
                    //   const recipes: Recipe[] = response.json();  
                (recipes) => {
                  for (let recipe of recipes){
                      if (!recipe['ingredients']){
                          console.log(recipe);
                        recipe['ingredients'] = [];
                      }
                  }
                  return recipes;
                //   return [];
                }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
                }
            );
    }

}