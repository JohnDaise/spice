import * as ShoppingListActions from './shopping-list.actions'

import { Ingredient } from '../shared/ingredient.model';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
} //this interface is used to set shape of state

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: null
};


export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }; // the above section simply updates single ingredient in a way that immutable
            let ingredients = [...state.ingredients];
            ingredients[action.payload.index] = updatedIngredient; //this adds the updated ingredient to the ingredients array
            return {
                ...state,
                ingredients: ingredients
            }; //updates state of ingredients with the new ingredients array
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients]; 
            return {
                ...state,
                ingredients: state.ingredients.splice(action.payload, 1)
            };
        default:
            return state;
    }
}