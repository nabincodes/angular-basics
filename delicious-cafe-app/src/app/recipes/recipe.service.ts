import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Delicious Cheese Pizza',
      'A super tasty and affordable Pizza - just loving it',
      'https://i.ytimg.com/vi/1pVqlEBmPJU/maxresdefault.jpg',
    [
      new Ingredient('Cheese', 1),
      new Ingredient('Wheat', 1),
      new Ingredient('Capsicum', 2),
      new Ingredient('Tomato', 3)
    ]),
    new Recipe('Hamburger',
      'Most loved Hamburger - just enjoy! ',
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Meat', 1),
        new Ingredient('Green Vegetables', 3),
        new Ingredient('Tomato', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
