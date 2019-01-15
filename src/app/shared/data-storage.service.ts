import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService){}

    storeData(){
        return this.http.put('https://ng-spice.firebaseio.com/recipes.json', this.recipeService.getRecipes());//use puts bc it will override the database on backend
    }

    getData(){
        return this.http.get('https://ng-spice.firebaseio.com/recipes.json')
            .subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
                }
            );
    }

}