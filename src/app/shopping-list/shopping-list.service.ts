import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

    private ingredients: Ingredient[] =  [
        new Ingredient('Apples', 5),
        new Ingredient('Strawberries', 10),
        new Ingredient('Pineapples', 1)
      ];


      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
      }

}