import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());    
  }

  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    //   }
    // }
    // this.ingredients.push(...ingredients);
    for(let newIngredient of ingredients){
      // console.log("finding match for " + newIngredient.name);
      let isIngredientPresent: boolean = false;
      for(let ingredient of this.ingredients){
        // console.log("matching with" + ingredient.name);
        if(ingredient.name == newIngredient.name){

          // console.log(" " + newIngredient.name + " matched with " + ingredient.name);
          ingredient.amount += newIngredient.amount;
          isIngredientPresent = true;
          break;
        }
      }
      if(!isIngredientPresent){
        this.ingredients.push(newIngredient);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}