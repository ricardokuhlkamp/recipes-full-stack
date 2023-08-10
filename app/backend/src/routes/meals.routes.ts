import { Request, Router, Response } from 'express';
import MealController from '../controllers/MealController';

const mealController = new MealController();

const router = Router();

// router.get(
//   '/',
//   (req: Request, res: Response) => mealController.getAllMeals(req, res),
// );

router.get(
  '/category',
  (req: Request, res: Response) => mealController.findAllMealsByCategory(req, res),
);

router.get(
  '/categories',
  (req: Request, res: Response) => mealController.findAllMealCategories(req, res),
);

// Buscar todas as comidas por uma área /area?q=Canadian
router.get(
  '/area',
  (req: Request, res: Response) => mealController.findAllMealsByArea(req, res),
);

// Buscar uma comida por um nome em específico /name?q=Arrabiata
router.get(
  '/name',
  (req: Request, res: Response) => mealController.findMealByName(req, res),
);

router.get(
  '/name/:id',
  (req: Request, res: Response) => mealController.findMealById(req, res),
);

// Buscar uma comida por aleatoriedade /random
router.get(
  '/random',
  (req: Request, res: Response) => mealController.getRandomMeal(req, res),
);
router.get(
  '/letter',
  (req: Request, res: Response) => mealController.getByLetter(req, res),
);

router.get(
  '/areas',
  (req: Request, res: Response) => mealController.findAllMealAreas(req, res),
)

router.get(
  '/ingredients',
  (req: Request, res: Response) => mealController.findAllMealsIngredients(req, res),
)

router.get(
  '/ingredient',
  (req: Request, res: Response) => mealController.findMealsByIngredient(req, res),
)

export default router;
