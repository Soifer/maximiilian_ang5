import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipes/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  public onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetails.ingredients);
  }

}
