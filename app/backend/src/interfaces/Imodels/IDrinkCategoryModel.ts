import { ICategory } from '../drinks/ICategory';

export interface IDrinkCategoryModel {
  getAll(): Promise<ICategory[]>
}
