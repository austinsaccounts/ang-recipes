import { Component } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-recipes';
  firstRecipe: Recipe = new Recipe('raw-beefof-the-wellingstons', [
    new Ingredient('beef', 1),
    new Ingredient('salsa', 3)
  ], 'cook the beef untill it is welling-toned');
}
export class Recipe {
  constructor(public title: string, public ingredients: Ingredient[], public directions: string) { }
}
export class Ingredient {
  constructor(public title: string, public quantity: number) { }
}
