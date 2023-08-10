/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
import SequelizeDrink from '../database/models/SequelizeDrink';

const formatDrinks = (drinks: SequelizeDrink[], q?: string) => {
    const transformedDrinks = drinks.map((drink: any) => {
    // Convertendo as propriedades do objeto drink em variáveis separada

    const {
      idDrink,
      strDrink,
      strTags,
      strVideo,      
      strDrinkAlternate,
      strInstructions,
      strDrinkThumb,
      dateModified,
      strCategory,
      strIba,
      strAlcoholic,
      strGlass,
      strIngredient,
      strImageSource,
      strImageAttribution,
      strCreativeCommonsConfirmed,
    } = drink.dataValues;

    // Mapeando as propriedades strIngredient e strMeasure para um formato sequencial
    const ingredients: Record<string, string> = {};
    // const ingredientMeasue: Record<string, string> = {};
    const measure: Record<string, string> = {};
    
    strIngredient.map((ingredient: any, index: number) => {
      const ingredientKey = `strIngredient${index + 1}`;
      const measureKey = `strMeasure${index + 1}`;
      ingredients[ingredientKey] = ingredient.strIngredient;
      measure[measureKey] = Object.values(ingredient.ingredients_measures_drinks['dataValues'])[0] as unknown as any;
    });

    return {
      idDrink,
      strDrink,
      strTags,
      strVideo,      
      strDrinkAlternate,
      strInstructions,
      strDrinkThumb,
      dateModified,
      strIba,
      strAlcoholic,
      strGlass,
      strImageSource,
      strImageAttribution,
      strCreativeCommonsConfirmed,
      strCategory: strCategory.strCategory,
      ...ingredients,
      ...measure,
    };
  });
  if (q) {
    return transformedDrinks.filter((drink) => {
      // Verificar cada chave dinamicamente
      let index = 1;
      while (drink[`strIngredient${index}` as keyof typeof drink]) {
        if (drink[`strIngredient${index}` as keyof typeof drink] === q) {
          return true; // Retorna true se uma das chaves for igual a 'q'
        }
        index++;
      }
      return false; // Retorna false se nenhuma das chaves for igual a 'q'
    });
  }
  return transformedDrinks;
};

export default formatDrinks;
