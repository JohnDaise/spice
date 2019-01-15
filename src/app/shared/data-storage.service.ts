import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService){}

    storeData(){
        return this.http.put('https://ng-spice.firebaseio.com/recipes.json', this.recipeService.getRecipes());//use puts bc it will override the database on backend
    }


}