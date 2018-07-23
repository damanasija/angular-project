import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{

  private recipes: Recipe[] = [
    new Recipe(
      "Creamy Doughnut",
      "A sweet doughnut just for sweet you!",
      "http://www.aimadeitforyou.com/wp-content/uploads/2016/04/IMG_9564-1024x683.jpg",
      [
        new Ingredient('Whole Milk', 1),
        new Ingredient('Bread Flour cups', 2)
      ]
    ),
    new Recipe(
      "Bad-ass Burger",
      "This creamy monster is appetizing",
      "https://media.mnn.com/assets/images/2017/06/sonic_mushroom_beef_burger.jpg.653x0_q80_crop-smart.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Patty', 1),
        new Ingredient('Cheese Slices', 2)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService){
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
    //returns a copy of the recipes array rather than reference to this array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    // console.log(ingredients);
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number): Recipe{
    return this.recipes.slice()[index];
  }
  
}