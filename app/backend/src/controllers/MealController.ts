import { Request, Response } from 'express';
import MealService from '../services/MealService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class MealController {
  private mealService = new MealService();

  // public async getAllMeals(_req: Request, res: Response) {
  //   const serviceResponse = await this.mealService.getAllMeals();
  //   res.status(200).json(serviceResponse.data);
  // }

  async findAllMealCategories(req: Request, res: Response) {
    // Buscar todas as categorias /categories
    // https://www.the${query}db.com/api/json/v1/1/list.php?c=list

    const { status, data } = await this.mealService.findAllMealCategories();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findAllMealsByCategory(req: Request, res: Response) {
    // Buscar por uma categoria /category?q=Seafood
    // https://www.the${query}db.com/api/json/v1/1/filter.php?c=${category}
    const { q } = req.query;
    const { status, data } = await this.mealService.findAllMealsByCategory(q as string);

    if (status) return res.status(mapStatusHTTP(status)).json(data);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findAllMealsByArea(req: Request, res: Response) {
    const area = req.query.q;

    const { status, data } = await this.mealService.findAllMealsByArea(area as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findMealByName(req: Request, res: Response) {
    const { q } = req.query;

    if (q === "" || !q) {
      const { status, data } = await this.mealService.getAllMeals();
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const { status, data } = await this.mealService.findMealByName(q as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findMealById(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.mealService.findMealById(+id as number);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getRandomMeal(req: Request, res: Response) {
    const { status, data } = await this.mealService.getRandomMeal();
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getByLetter(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data } = await this.mealService.getByFirstLetter(q as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findAllMealAreas(_req: Request, res: Response) {
    const serviceResponse = await this.mealService.findAllMealAreas();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  
  async findMealsByIngredient(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data } = await this.mealService.findMealsByIngredient(q as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findAllMealsIngredients(req: Request, res: Response) {
    const { status, data } = await this.mealService.findAllMealsIngredients();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findMealsIngredientByName(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data } = await this.mealService.findMealsIngredientByName(q as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
// Ja faitos
// Buscar todos os nomes /name?q=
// Buscar todas as categorias /categories
// Buscar po uma categoria /category?q=Seafood

/**
Calebe
Buscar todas as comidas por uma área /area?q=Canadian
Buscar uma comida por um nome em específico /name?q=Arrabiata
Buscar uma comida por aleatoriedade /random
*/

/**
Ricardo
Buscar por primeira letra /letter?q=a
Buscar todas as áreas /areas
Buscar todos os ingredientes /ingredients
Buscar por um ingrediente /ingredient?q=chicken_breast
*/

export default MealController;
