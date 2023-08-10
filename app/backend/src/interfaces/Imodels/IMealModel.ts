// import SequelizeMealArea from '../../database/models/SequelizeMealArea';
import { MealCategory } from '../../types/MealCategory';
import { MealCategories } from '../../types/MealCategories';
import { MealFirstLetter } from '../../types/MealFirstLetter';
import IMealsAreas from './IMealsAreas';
import IMealsIngredients from './IMealsIngredients';
import { MealByArea } from '../../types/MealByArea';
import { IIngredient } from '../meals/IIngredient';

export type IMealModel = {
  findAllMeals(): Promise<{ meals: MealFirstLetter[] }>,
  findAllMealsByArea(area: string): Promise<{ meals: MealByArea[] } | null>,
  findMealByName(name: string): Promise<{ meals: MealFirstLetter[] } | null>,
  getRandomMeal(): Promise<{ meals: MealFirstLetter[] } | null>,
  findAllMealCategories(): Promise<{ meals: MealCategories[] }>,
  findAllMealsByCategory(category: string): Promise<{ meals: MealCategory[] } | null>,
  findByFirstLetter(q: string): Promise<{ meals: MealFirstLetter[] } | null>,
  findAllMealsAreas(): Promise<IMealsAreas>,
  findAllMealsIngredients(): Promise<IMealsIngredients>,
  findMealsIngredientByName(q: string): Promise<{ meals: IIngredient[] } | null>,
  findMealById(id: number): Promise<{ meals: MealFirstLetter[] } | null>,
  findMealsByIngredient(q: string): Promise<{ meals: MealFirstLetter[] } | null>,
};
