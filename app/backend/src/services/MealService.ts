import { ServiceResponse } from '../types/ServiceResponse';
import { IMealModel } from '../interfaces/Imodels/IMealModel';
import MealModel from '../models/MealModel';
import IMealsAreas from '../interfaces/Imodels/IMealsAreas';
import IMealsIngredients from '../interfaces/Imodels/IMealsIngredients';
import { MealFirstLetter } from '../types/MealFirstLetter';
import { MealCategories } from '../types/MealCategories';
import { MealByArea } from '../types/MealByArea';
import { MealCategory } from '../types/MealCategory';
import { response } from 'express';
import { IIngredient } from '../interfaces/meals/IIngredient';

class MealService {
  private mealModel: IMealModel = new MealModel();

  public async getAllMeals():Promise<ServiceResponse<{ meals: MealFirstLetter[] }>> {
    const allMeals = await this.mealModel.findAllMeals();
    return { status: 'SUCCESSFUL', data: allMeals };
  }

  async findAllMealCategories():Promise<ServiceResponse<{ meals: MealCategories[] }>> {
    const response = await this.mealModel.findAllMealCategories();

    return { status: 'SUCCESSFUL', data: response };
  }

  async findAllMealsByCategory(category: string):Promise<ServiceResponse<{ meals: MealCategory[] }>> {
    const response = await this.mealModel.findAllMealsByCategory(category);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'category not found' } };

    return { status: 'SUCCESSFUL', data: response };
  }

  async findAllMealsByArea(area: string): Promise<ServiceResponse<{ meals: MealByArea[] }>> {
    const response = await this.mealModel.findAllMealsByArea(area);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'area not found' } };

    return { status: 'SUCCESSFUL', data: response };
  }

  async findMealByName(name: string):Promise<ServiceResponse<{ meals: MealFirstLetter[] }>> {
    const response = await this.mealModel.findMealByName(name);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'meal not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async findMealById(id: number):Promise<ServiceResponse<{ meals: MealFirstLetter[] }>> {
    const response = await this.mealModel.findMealById(id);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'id not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async getRandomMeal():Promise<ServiceResponse<{ meals: MealFirstLetter[] }>> {
    const response = await this.mealModel.getRandomMeal();
    if (!response) return { status: 'NOT_FOUND', data: { message: 'meal not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async getByFirstLetter(q: string):Promise<ServiceResponse<{ meals: MealFirstLetter[] }>> {
    const response = await this.mealModel.findByFirstLetter(q);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'meal not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async findAllMealAreas(): Promise<ServiceResponse<IMealsAreas>> {
    const response = await this.mealModel.findAllMealsAreas();
    return { status: 'SUCCESSFUL', data: response };
  }

  async findMealsByIngredient(q: string):Promise<ServiceResponse<{ meals: MealFirstLetter[] }>> {
    const response = await this.mealModel.findMealsByIngredient(q);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'meal not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }

  async findAllMealsIngredients(): Promise<ServiceResponse<IMealsIngredients>> {
    const response = await this.mealModel.findAllMealsIngredients();
    return { status: 'SUCCESSFUL', data: response };
  }

  async findMealsIngredientByName(q: string): Promise<ServiceResponse<{ meals: IIngredient[] }>> {
    const response = await this.mealModel.findMealsIngredientByName(q);
    if (!response) return { status: 'NOT_FOUND', data: { message: 'ingredient not found' } };
    return { status: 'SUCCESSFUL', data: response };
  }
}

export default MealService;
