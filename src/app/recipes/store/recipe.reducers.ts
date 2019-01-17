import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State
}//used this interface because the recipes page is 'lazily loaded'
//extends is inheritance

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



export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions){
    switch(action.type){
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index]; //finding the recipe among recipes array
            const updatedRecipe ={
                ...recipe, ///distributes properites of old recipe
                ...action.payload.updatedRecipe //distributes property of new recipe
            }; 

            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            }
        case (RecipeActions.DELETE_RECIPE):
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload,1)
            return {
                ...state,
                recipes: oldRecipes
            }
        default:
            return state;
    }
}