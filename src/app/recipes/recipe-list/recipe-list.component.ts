import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "this is simply a test", "https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg"),
    new Recipe("Another Test Recipe", "this is simply a test", "https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg"),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
