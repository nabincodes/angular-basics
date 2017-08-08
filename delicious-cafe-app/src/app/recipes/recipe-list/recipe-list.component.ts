import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'Pizza Recipe Description','https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_960_720.jpg'),
    new Recipe('Pizza', 'Pizza Recipe Description','https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
