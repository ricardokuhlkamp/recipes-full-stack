import { Router } from 'express';
import drinkRouter from './drinks.routes';
// import drinksIngredientsRouter from './drinksIngredients.router';
// import drinkCategoryRouter from './drinksCategories.router';

import mealsRouter from './meals.routes';

const router = Router();

router.use('/drinks', drinkRouter);
// router.use('/drinks', drinksIngredientsRouter);
// router.use('/drinks', drinkCategoryRouter);

router.use('/meals', mealsRouter);

export default router;
