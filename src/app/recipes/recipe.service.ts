import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes: Recipe[]=[
        new Recipe('Pie', 'This is a pie.', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Sweet-Potato-Pie_EXPS_GHBZ18_1203_B08_15_3b-696x696.jpg'),
        new Recipe('Cake', 'This is a cake.', 'https://assets.marthastewart.com/styles/wmax-750/d65/triple-ice-cream-cake-chocolate-martha-bakes-se10-4831-v2-d113213/triple-ice-cream-cake-chocolate-martha-bakes-se10-4831-v2-d113213_horiz.jpg?itok=WfWo8Awj')
      ];
    

      getRecipes(){
          return this.recipes.slice();
      }

}