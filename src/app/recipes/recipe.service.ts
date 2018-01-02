import {EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('first recipe', 'simple test', '../../..//assets/images/resipe.jpg'),
        new Recipe('second recipe', 'complex test', '../../..//assets/images/resipe.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}