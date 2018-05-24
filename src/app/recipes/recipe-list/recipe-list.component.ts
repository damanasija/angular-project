import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("test recipe", "this is simply a test", "https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg"),
    new Recipe("test recipe", "this is simply a test", "https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
