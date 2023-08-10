import { Request, Router, Response } from 'express';
import DrinkController from '../controllers/DrinkController';

const drinkController = new DrinkController();

const drinkRouter = Router();

drinkRouter.get(
  '/ingredients',
  (req: Request, res: Response) => drinkController.getIngredients(req, res),
);

drinkRouter.get(
  '/ingredient',
  (req: Request, res: Response) => drinkController.getAllDrinkByIngredient(req, res),
)

drinkRouter.get(
  '/categories',
  (req: Request, res: Response) => drinkController.getCategories(req, res),
);

drinkRouter.get(
  '/name',
  (req: Request, res: Response) => drinkController.getDrinks(req, res),
);

drinkRouter.get(
  '/name/:id',
  (req: Request, res: Response) => drinkController.getById(req, res),
);

drinkRouter.get(
  '/letter',
  (req: Request, res: Response) => drinkController.getByLetter(req, res),
);

drinkRouter.get(
  '/category',
  (req: Request, res: Response) => drinkController.getByCategory(req, res),
);

drinkRouter.get(
  '/random',
  (req: Request, res: Response) => drinkController.randomDrink(req, res),
);

export default drinkRouter;
