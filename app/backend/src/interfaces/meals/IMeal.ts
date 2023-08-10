export interface IMeal {
  idMeal: number;
  strMeal: string;
  strDrinkAlternate: string | null;
  idArea: number | null; // foreignKey de areas
  idCategory: number; // foreignKey de categories
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: Date | null;
}
