import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Map<string, Ingredient> = new Map();

  constructor() {
    this.ingredients.set('Apples', new Ingredient('Apples', 5));
    this.ingredients.set('Tomatoes', new Ingredient('Tomatoes', 10));
  }


  static addAndGetAsNumbers(first: number, second: number): number {
    return first + second;
  }

  getIngredients(): Ingredient[] {
    return Array.from(this.ingredients.values()).slice();
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.set(ingredient.name, ingredient);
    this.ingredientsChanged.next(Array.from(this.ingredients.values()).slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    //   }
    // }
    // this.ingredients.push(...ingredients);
    // for (let newIngredient of ingredients) {
    //   // console.log("finding match for " + newIngredient.name);
    //   let isIngredientPresent: boolean = false;
    //   for (let ingredient of this.ingredients) {
    //     // console.log("matching with" + ingredient.name);
    //     if (ingredient.name == newIngredient.name) {
    //
    //       // console.log(" " + newIngredient.name + " matched with " + ingredient.name);
    //       ingredient.amount += newIngredient.amount;
    //       isIngredientPresent = true;
    //       break;
    //     }
    //   }
    //   if (!isIngredientPresent) {
    //     this.ingredients.push(newIngredient);
    //   }
    // }
    ingredients.forEach((ingredient) => {
      if (this.ingredients.has(ingredient.name)) {
        const existingIngredient = this.ingredients.get(ingredient.name);
        existingIngredient.amount += ingredient.amount;
      } else {
        this.ingredients.set(ingredient.name, ingredient);
      }
    });
    this.ingredientsChanged.next(Array.from(this.ingredients.values()).slice());
  }
}
