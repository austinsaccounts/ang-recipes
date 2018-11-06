import { Component } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-recipes';
  Recipe1: Recipe = new Recipe('beef-of-the-wellingstons', [
    new Ingredient('beef', 1),
    new Ingredient('salsa', 3)
  ], 'cook the beef untill it is welling-toned');
  Recipe2: Recipe = new Recipe('steak tartar', [
    new Ingredient('steak', 2),
    new Ingredient('tartar', 22)
  ], 'tar until steak is tar-tar-ed');
  Recipe3: Recipe = new Recipe('egg-plant parm', [
    new Ingredient('eggplant', 3),
    new Ingredient('parm', 33)
  ], 'plant the egg and parm');
  recipes = [this.Recipe1, this.Recipe2, this.Recipe3];
}
export class Recipe {
  constructor(public title: string, public ingredients: Ingredient[], public directions: string) { }
}
export class Ingredient {
  constructor(public title: string, public quantity: number) { }
}
