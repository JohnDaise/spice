import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { RecipeService } from '../recipe.service';
import * as ShoppingListActions from '../../store/shopping-list.actions'
import * as fromApp from '../../store/app.reducers'
import { Observable } from 'rxjs';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeState = this.store.select('recipes');
        }
      );
  }

  onAddToSL(){
    console.log('added');
    this.store.select('recipes')
    .take(1)
    .subscribe((recipeState: fromRecipe.State) => {
      this.store.dispatch(new ShoppingListActions.AddIngredients(
        recipeState.recipes[this.id].ingredients));
    });
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route });
  }

  onDeleteRecipe(){
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
