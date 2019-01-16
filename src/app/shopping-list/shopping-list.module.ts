import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ShoppingListModule {}