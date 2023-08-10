import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import DrinkService from '../services/DrinkService';

export default class DrinkController {
  private drinkService = new DrinkService();

  async getCategories(_req: Request, res: Response) {
    const { status, data } = await this.drinkService.getAllDrinkCategories();
    res.status(mapStatusHTTP(status)).json(data);
  }

  async getIngredients(_req: Request, res: Response) {
    const { status, data } = await this.drinkService.getAllDrinkIngredients();
    res.status(mapStatusHTTP(status)).json(data);
  }

  async getIngredientByName(req: Request, res: Response) {
    const { q } = req.query;
    const serviceResponse = await this.drinkService.getIngredientByName(q as string);
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  async getAllDrinkByIngredient(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data } = await this.drinkService.getAllDrinkByIngredient(q as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    res.status(mapStatusHTTP(status)).json(data);
  }

  async getDrinks(req: Request, res: Response) {
    const { q } = req.query;

    if (!q || q === '') {
      const { status, data } = await this.drinkService.getAllDrinks();
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const { status, data } = await this.drinkService.getByName(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getByLetter(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data } = await this.drinkService.getByFirstLetter(q as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.drinkService.getById(+id as number);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async randomDrink(_req: Request, res: Response) {
    const { status, data } = await this.drinkService.randomDrink();
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getByCategory(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data} = await this.drinkService.getByCategory(q as string);
    if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);
    res.status(mapStatusHTTP(status)).json(data);
  }
}

/**
Calebe
Buscar todos os nomes /name?q=
Buscar por um nome em específico /name?q=Arrabiata
Buscar por aleatoriedade /random
Buscar todas as categorias /categories

Ricardo
Buscar por primeira letra /letter?q=a ok
Buscar todos os ingredientes /ingredients ok
Buscar por um ingrediente /ingredient?q=chicken_breast ok???
Buscar po uma categoria /category?q=Seafood ok
*/
