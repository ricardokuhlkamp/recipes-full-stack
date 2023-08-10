import { Op } from 'sequelize';
import SequelizeMealCategory from '../database/models/SequelizeMealCategory';
import SequelizeMeal from '../database/models/SequelizeMeal';
import SequelizeMealArea from '../database/models/SequelizeMealArea';
import { IMealModel } from '../interfaces/Imodels/IMealModel';
import SequelizeMealIngredient from '../database/models/SequelizeMealIngredient';
import formatMeals from '../utils/formatMeals';
import IMealsAreas from '../interfaces/Imodels/IMealsAreas';
import IMealsIngredients from '../interfaces/Imodels/IMealsIngredients';
import { IIngredient } from '../interfaces/meals/IIngredient';
import { MealFirstLetter } from '../types/MealFirstLetter';
import { MealCategories } from '../types/MealCategories';
import { MealCategory } from '../types/MealCategory';
import { MealByArea } from '../types/MealByArea';

class MealModel implements IMealModel {
  private sequelizeMeal = SequelizeMeal;
  private sequelizeMealCategory = SequelizeMealCategory;
  private sequelizeMealArea = SequelizeMealArea;
  private sequelizeMealIngredient = SequelizeMealIngredient;

  async findAllMeals(): Promise<{ meals: MealFirstLetter[] }> {
    const response = await this.sequelizeMeal.findAll({
      include: [
        { model: SequelizeMealCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeMealArea, as: 'strArea', attributes: ['strArea'] },
        { model: SequelizeMealIngredient, as: 'strIngredient', attributes: { exclude: ['created_at'] }, through: { attributes: ['str_measure'] } },
      ],
      attributes: { exclude: ['idCategory', 'idArea'] },
    });

    return { meals: formatMeals(response) };
  }

  async findAllMealCategories(): Promise<{ meals: MealCategories[] }> {
    const response = await this.sequelizeMealCategory.findAll();
    const result = response.map(({strCategory}) => ({strCategory}))
    const mealCategories = { meals: result };
    return mealCategories;
  }

  async findAllMealsByCategory(category: string): Promise<{ meals: MealCategory[] } | null> {
    const categories = await this.sequelizeMealCategory.findOne(
      { where: { strCategory: category } },
    );

    if (!categories) return null;

    const meals = await this.sequelizeMeal.findAll({
      where: { idCategory: categories.idCategory },
    });

    const mealsWithOutCategories = meals.map(
      ({ strMeal, strMealThumb, idMeal }) => ({ strMeal, strMealThumb, idMeal }),
    );

    return { meals: mealsWithOutCategories};
  }

  async findAllMealsByArea(area: string): Promise<{ meals: MealByArea[] } | null> {
    const sequelizeArea = await this.sequelizeMealArea.findOne({ where: { strArea: area } });

    if (!sequelizeArea) return null;

    const sequelizeMeals = await this.sequelizeMeal.findAll({
      where: { idArea: sequelizeArea.idArea },
      attributes: ['strMeal', 'strMealThumb', 'idMeal'],
    });

    return { meals: sequelizeMeals };
  }

  async findMealByName(name: string): Promise<{ meals: MealFirstLetter[] } | null> {
    const response = await this.sequelizeMeal.findAll({
      where: { strMeal: name },
      include: [
        { model: SequelizeMealCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeMealArea, as: 'strArea', attributes: ['strArea'] },
        { model: SequelizeMealIngredient, as: 'strIngredient', attributes: { exclude: ['created_at'] }, through: { attributes: ['str_measure'] } },
      ],
      attributes: { exclude: ['idCategory', 'idArea'] },
    });

    if (!response) return null;

    return { meals: formatMeals(response)};
  }

  async findMealById(id: number): Promise<{ meals: MealFirstLetter[] } | null> {
    const response = await this.sequelizeMeal.findAll({
      where: { idMeal: id },
      include: [
        { model: SequelizeMealCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeMealArea, as: 'strArea', attributes: ['strArea'] },
        { model: SequelizeMealIngredient, as: 'strIngredient', attributes: { exclude: ['created_at'] }, through: { attributes: ['str_measure'] } },
      ],
      attributes: { exclude: ['idCategory', 'idArea'] },
    });

    if (!response) return null;

    return { meals: formatMeals(response)};
  }

  async getRandomMeal(): Promise<{ meals: MealFirstLetter[] } | null> {
    const maxLength = await this.sequelizeMeal.count();
    const randomIndex = Math.floor(Math.random() * maxLength);
    const response = await this.sequelizeMeal.findAll({
      include: [
        { model: SequelizeMealCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeMealArea, as: 'strArea', attributes: ['strArea'] },
        { model: SequelizeMealIngredient, as: 'strIngredient', attributes: { exclude: ['created_at'] }, through: { attributes: ['str_measure'] } },
      ],
      attributes: { exclude: ['idCategory', 'idArea'] },
    });

    if (!response) return null;

    return { meals: [formatMeals(response)[randomIndex]]};
  }

  async findByFirstLetter(q: string): Promise<{ meals: MealFirstLetter[] } | null> {
    const response = await this.sequelizeMeal.findAll(
      {
        where: {
          strMeal: {
            [Op.like]: `${q}%`,
          },
        },
        include: [
          { model: SequelizeMealCategory, as: 'strCategory', attributes: ['strCategory'] },
          { model: SequelizeMealArea, as: 'strArea', attributes: ['strArea'] },
          { model: SequelizeMealIngredient, as: 'strIngredient', attributes: { exclude: ['created_at'] }, through: { attributes: ['str_measure'] } },
        ],
        attributes: { exclude: ['idCategory', 'idArea'] },
      },
    );

    if (!response) return null;

    return { meals: formatMeals(response)};
  }

  async findAllMealsAreas(): Promise<IMealsAreas> {
    const response = await this.sequelizeMealArea.findAll({
      attributes: { exclude: ['idArea'] },
    });
    return { meals: response };
  }

  async findMealsByIngredient(q: string): Promise<{ meals: MealFirstLetter[] } | null> {
    const response = await this.sequelizeMeal.findAll({
      include: [
        { model: SequelizeMealCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeMealArea, as: 'strArea', attributes: ['strArea'] },
        { model: SequelizeMealIngredient, as: 'strIngredient', attributes: { exclude: ['created_at'] }, through: { attributes: ['str_measure'] } },
      ],
      attributes: { exclude: ['idCategory', 'idArea'] },
    });

    const result = formatMeals(response, q)
    if (!result) return null

    return { meals: result };
  }

  async findAllMealsIngredients(): Promise<IMealsIngredients> {
    const response = await this.sequelizeMealIngredient.findAll();
    return { meals: response };
  }
  
  async findMealsIngredientByName(q: string): Promise<{ meals: IIngredient[] } | null> {
    const response = await this.sequelizeMealIngredient.findOne({ where: { strIngredient: q } });
    if (!response) {
      return null;
    }
    return { meals: [response] };
  }
}

export default MealModel;
