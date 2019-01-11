import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe(
            'Pie', 'This is a pie.', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Sweet-Potato-Pie_EXPS_GHBZ18_1203_B08_15_3b-696x696.jpg',
            [
                new Ingredient('pumpkin',  1),
                new Ingredient('flour', 1),
                new Ingredient('sugar', 2)
            ]),
        new Recipe(
            'Cake', 'This is a cake.', 'https://assets.marthastewart.com/styles/wmax-750/d65/triple-ice-cream-cake-chocolate-martha-bakes-se10-4831-v2-d113213/triple-ice-cream-cake-chocolate-martha-bakes-se10-4831-v2-d113213_horiz.jpg?itok=WfWo8Awj', 
            [
                new Ingredient('chocolate',  1),
                new Ingredient('frosting',  1),
                new Ingredient('flour', 1),
                new Ingredient('egg', 3)
            ])
      ];
    
      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

}