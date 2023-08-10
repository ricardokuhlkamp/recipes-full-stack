/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
import SequelizeMeal from '../database/models/SequelizeMeal';

const formatMeals = (meals: SequelizeMeal[], q?: string) => {
  const transformedMeals = meals.map((meal: any) => {
    // Convertendo as propriedades do objeto meal em variáveis separadas
    const {
      idMeal,
      strMeal,
      strDrinkAlternate,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      strSource,
      strImageSource,
      strCreativeCommonsConfirmed,
      dateModified,
      strCategory,
      strArea,
      strIngredient,
      // strMeasure,
    } = meal.dataValues;

    // Mapeando as propriedades strIngredient e strMeasure para um formato sequencial
    const ingredients: Record<string, string> = {};
    // const ingredientMeasue: Record<string, string> = {};
    const measure: Record<string, string> = {};

    strIngredient.map((ingredient: any, index: number) => {
      const ingredientKey = `strIngredient${index + 1}`;
      const measureKey = `strMeasure${index + 1}`;
      ingredients[ingredientKey] = ingredient.strIngredient;
      measure[measureKey] = Object.values(ingredient.ingredients_measures_meals['dataValues'])[0] as unknown as any;
      // const testeKey = `strMeasure${index + 1}`;
      // measure[testeKey] = Object.values(ingredientMeasue[measureKey])[0]
      // console.log(Object.entries(ingredientMeasue[measureKey])[0])
      // console.log(Object.values(ingredient.ingredients_measures_meals['dataValues'])[0])
    });

    return {
      idMeal,
      strMeal,
      strDrinkAlternate,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      strSource,
      strImageSource,
      strCreativeCommonsConfirmed,
      dateModified,
      strCategory: strCategory.strCategory,
      strArea: strArea.strArea,
      ...ingredients,
      ...measure,
    };
  });
  if (q) {
    return transformedMeals.filter((meal) => {
      // Verificar cada chave dinamicamente
      let index = 1;
      while (meal[`strIngredient${index}` as keyof typeof meal]) {
        if (meal[`strIngredient${index}` as keyof typeof meal] === q) {
          return true; // Retorna true se uma das chaves for igual a 'q'
        }
        index++;
      }
      return false; // Retorna false se nenhuma das chaves for igual a 'q'
    });
  }

  return transformedMeals;
};

export default formatMeals;
