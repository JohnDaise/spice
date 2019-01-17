import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

export interface FeatureState {
    recipes: State
}//used this interface because the recipes page is 'lazily loaded'

export interface State {
   recipes: Recipe[];
} //this interface is used to set shape of state

const initialState: State = {
    recipes: [
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
      ]
    
};



export function recipeReducer(state = initialState, action){
    return state;
}