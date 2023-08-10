import { Op } from 'sequelize';
import SequelizeDrink from '../database/models/SequelizeDrink';
import { IDrinkModel } from '../interfaces/Imodels/IDrinkModel';
import SequelizeDrinksIngredients from '../database/models/SequelizeDrinksIngredients';
import { IIngredients } from '../interfaces/drinks/IIngredients';
import SequelizeDrinkCategory from '../database/models/SequelizeDrinkCategory';
import formatDrinks from '../utils/formatDrinks';
import { DrinkCategory } from '../types/DrinkCategory';
import { DrinkCategories } from '../types/DrinkCategories';
import { DrinkIngredients } from '../types/DrinkIngredients';
import { DrinksByIngredient } from '../types/DrinksByIngredient';
import { Drink } from '../types/Drink';

class DrinkModel implements IDrinkModel {
  private sequelizeDrink = SequelizeDrink;
  private sequelizeDrinksIngredients = SequelizeDrinksIngredients;
  private sequelizeDrinkCategory = SequelizeDrinkCategory;

  async getAllDrinkCategories(): Promise<{ drinks: DrinkCategories[]}> {
    const response = await this.sequelizeDrinkCategory.findAll();
    const onlyStrCategory = response.map(({strCategory}) => ({strCategory}));
    return {drinks: onlyStrCategory};
  }

  async getAllDrinksIngredients(): Promise<{ drinks: DrinkIngredients[] }> {
    const response = await this.sequelizeDrinksIngredients.findAll();
    const onlyStrCategory = response.map(({strIngredient}) => ({strIngredient1: strIngredient}));
    return { drinks: onlyStrCategory };
  }

  async findDrinksIngredientByName(q: string): Promise<{ ingredients: IIngredients[] } | null> {
    const response = await this.sequelizeDrinksIngredients.findOne({ where: { strIngredient: q } });

    if (!response) {
      return null;
    }

    return { ingredients: [response] };
  }

  async getAllDrinkByIngredient(q: string): Promise<{ drinks: DrinksByIngredient[] } | null> {
    const drinks = await this.sequelizeDrink.findAll({
      include: [
        { model: SequelizeDrinkCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeDrinksIngredients, as: 'strIngredient', attributes: { exclude: ['created_at']}, through: { attributes: ['str_measure'] }},
      ],
      attributes: { exclude: ['idCategory'] },
    });

    if (!drinks) {
      return null;
    }

    const formatedDrinks = formatDrinks(drinks, q);
    const lessAtributtes = formatedDrinks.map(({strDrink, strDrinkThumb, idDrink}) => ({strDrink, strDrinkThumb, idDrink}));

    return { drinks: lessAtributtes };
  }

  async getAllDrinks(): Promise<{ drinks: Drink[] } | null> {
    const drinks = await this.sequelizeDrink.findAll({
      include: [
        { model: SequelizeDrinkCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeDrinksIngredients, as: 'strIngredient', attributes: { exclude: ['created_at']}, through: { attributes: ['str_measure'] }},
      ],
      attributes: { exclude: ['idCategory'] },
    });
    if (!drinks) {
      return null;
    }

    return { drinks: formatDrinks(drinks)}; // stop
  }

  async findByName(name: string): Promise<{ drinks: Drink[] } | null> {
    const response = await this.sequelizeDrink.findOne({
      where: { strDrink: name },
      include: [
        { model: SequelizeDrinkCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeDrinksIngredients, as: 'strIngredient', attributes: { exclude: ['created_at']}, through: { attributes: ['str_measure'] }},
      ],
      attributes: { exclude: ['idCategory'] },
    });

    if (!response) {
      return null;
    }

    return { drinks: formatDrinks([response])};
  }

  async findById(id: number): Promise<{ drinks: Drink[] } | null> {
    const response = await this.sequelizeDrink.findOne({
      where: { idDrink: id },
      include: [
        { model: SequelizeDrinkCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeDrinksIngredients, as: 'strIngredient', attributes: { exclude: ['created_at']}, through: { attributes: ['str_measure'] }},
      ],
      attributes: { exclude: ['idCategory'] },
    });

    if (!response) {
      return null;
    }

    return { drinks: formatDrinks([response])};
  }

  async findByFirstLetter(q: string): Promise<{ drinks: Drink[] } | null> {
    const response = await this.sequelizeDrink.findAll(
      {
        where: {
          strDrink: {
            [Op.like]: `${q}%`,
          },
        },
        include: [
          { model: SequelizeDrinkCategory, as: 'strCategory', attributes: ['strCategory'] },
          { model: SequelizeDrinksIngredients, as: 'strIngredient', attributes: { exclude: ['created_at']}, through: { attributes: ['str_measure'] }},
        ],
        attributes: { exclude: ['idCategory'] },
      },
    );
    if (!response) {
      return null;
    }

    return { drinks: formatDrinks(response) };
  }

  async randomDrink(): Promise<{ drinks: Drink[] } | null> {
    const count = await this.sequelizeDrink.count();
    const offset = Math.floor(Math.random() * count);

    const response = await this.sequelizeDrink.findOne({
      offset,
      include: [
        { model: SequelizeDrinkCategory, as: 'strCategory', attributes: ['strCategory'] },
        { model: SequelizeDrinksIngredients, as: 'strIngredient', attributes: { exclude: ['created_at']}, through: { attributes: ['str_measure'] }},
      ],
      attributes: { exclude: ['idCategory'] },
    });
    
    if (!response) {
      return null;
    }

    return { drinks: formatDrinks([response])};
  }
  
  async getByCategory(q: string): Promise<{ drinks: DrinkCategory[] } | null> {
    const categoryDrink = await this.sequelizeDrinkCategory.findOne({
      where: { strCategory: q },
    });
    if (!categoryDrink) return null;

    const response = await this.sequelizeDrink.findAll(
      { where: { idCategory: categoryDrink.idCategory } },
    );

    const drinksWithOutCategories = response.map(
      ({ strDrink, strDrinkThumb, idDrink }) => ({ strDrink, strDrinkThumb, idDrink }),
    );

    return { drinks: drinksWithOutCategories };
  }
}

export default DrinkModel;
