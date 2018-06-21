import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService{

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "this is simply a test", "https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg"),
    new Recipe("Another Test Recipe", "this is simply a test", "https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg"),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
    //returns a copy of the recipes array rather than reference to this array
  }
  
}