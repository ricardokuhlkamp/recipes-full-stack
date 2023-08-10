import { IIngredients } from '../drinks/IIngredients';

export interface IDrinkIngredientModel {
  getAll(): Promise<IIngredients[]>
}
