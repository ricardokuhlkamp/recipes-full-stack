import { IIngredients } from '../interfaces/drinks/IIngredients';
import { IDrink } from '../interfaces/drinks/IDrink';
import { IDrinkModel } from '../interfaces/Imodels/IDrinkModel';
import DrinkModel from '../models/DrinkModel';
import { ICategory } from '../interfaces/drinks/ICategory';
import { ServiceResponse } from '../types/ServiceResponse';
import { IDrinks } from '../interfaces/drinks/IDrinks';
import { DrinkCategory } from '../types/DrinkCategory';
import { DrinkCategories } from '../types/DrinkCategories';
import { DrinkIngredients } from '../types/DrinkIngredients';
import { DrinksByIngredient } from '../types/DrinksByIngredient';
import { Drink } from '../types/Drink';

export default class DrinkService {
  private drinkModel: IDrinkModel = new DrinkModel();

  async getAllDrinkCategories(): Promise<ServiceResponse<{drinks: DrinkCategories[]}>> {
    const response = await this.drinkModel.getAllDrinkCategories();
    return { status: 'SUCCESSFUL', data: response };
  }

  async getAllDrinkIngredients(): Promise<ServiceResponse<{ drinks: DrinkIngredients[]}>> {
    const response = await this.drinkModel.getAllDrinksIngredients();
    return { status: 'SUCCESSFUL', data: response };
  }

  async getIngredientByName(q: string): Promise<ServiceResponse<{ ingredients: IIngredients[] } | null>>{
    const response = await this.drinkModel.findDrinksIngredientByName(q);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'category not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async getAllDrinkByIngredient(q: string): Promise<ServiceResponse<{ drinks: DrinksByIngredient[] } | null>>{
    const response = await this.drinkModel.getAllDrinkByIngredient(q);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'drinks for this ingredient not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async getAllDrinks():  Promise<ServiceResponse<{ drinks: Drink[] } | null>> {
    const response = await this.drinkModel.getAllDrinks();
    if (!response) return { status: 'NOT_FOUND', data: { message: 'not found drinks on the db' } };
    return { status: 'SUCCESSFUL', data: response };  
  }

  async getByName(name: string): Promise<ServiceResponse<{ drinks: Drink[] } | null>> {
    const response = await this.drinkModel.findByName(name);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'drink not found' } };
    return { status: 'SUCCESSFUL', data: response };  
  }

  async getById(id: number): Promise<ServiceResponse<{ drinks: Drink[] } | null>> {
    const response = await this.drinkModel.findById(id);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'drink not found' } };
    return { status: 'SUCCESSFUL', data: response };  
  }

  async getByFirstLetter(q: string): Promise<ServiceResponse<{ drinks: Drink[] } | null>> {
    const response = await this.drinkModel.findByFirstLetter(q);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'drink not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async randomDrink(): Promise<ServiceResponse<{ drinks: Drink[] } | null>> {
    const response = await this.drinkModel.randomDrink();
    if (!response) return { status: 'NOT_FOUND', data: { message: 'not found drinks on the db' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async getByCategory(q: string): Promise<ServiceResponse<{ drinks: DrinkCategory[] } | null>> {
    const response = await this.drinkModel.getByCategory(q);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'drinks not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }
}
