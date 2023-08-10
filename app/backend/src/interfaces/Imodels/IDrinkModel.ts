import { DrinkIngredients } from '../../types/DrinkIngredients';
import { DrinkCategories } from '../../types/DrinkCategories';
import { DrinkCategory } from '../../types/DrinkCategory';
import { ICategory } from '../drinks/ICategory';
import { IDrink } from '../drinks/IDrink';
import { IDrinks } from '../drinks/IDrinks';
import { IIngredients } from '../drinks/IIngredients';
import { DrinksByIngredient } from '../../types/DrinksByIngredient';
import { Drink } from '../../types/Drink';

export interface IDrinkModel {
  getAllDrinks(): Promise<{ drinks: Drink[] } | null>;
  findByName(name: string): Promise<{ drinks: Drink[] } | null>;
  findByFirstLetter(q: string): Promise<{ drinks: Drink[] } | null>;
  randomDrink(): Promise<{ drinks: Drink[] } | null>;
  getByCategory(category: string): Promise<{ drinks: DrinkCategory[] } | null>;
  getAllDrinksIngredients(): Promise<{ drinks: DrinkIngredients[] }>;
  getAllDrinkCategories(): Promise<{ drinks: DrinkCategories[]}>;
  findDrinksIngredientByName(q: string): Promise<{ ingredients: IIngredients[] } | null>;
  getAllDrinkByIngredient(q: string): Promise<{ drinks: DrinksByIngredient[] } | null>;
  findById(id: number): Promise<{ drinks: Drink[] } | null>
}
