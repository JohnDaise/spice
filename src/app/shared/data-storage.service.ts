import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/RX';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService,
                private authService: AuthService){}

    storeData(){
        const token = this.authService.getToken();

        return this.http.put('https://ng-spice.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());//use puts bc it will override the database on backend
    }

    getData(){
        const token = this.authService.getToken();
         this.http.get('https://ng-spice.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                  const recipes: Recipe[] = response.json();  
                  for (let recipe of recipes){
                      if (!recipe['ingredients']){
                          console.log(recipe);
                        recipe['ingredients'] = [];
                      }
                  }
                  return recipes;
                }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
                }
            );
    }

}