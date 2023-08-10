import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import RecipesContext from '../context/RecipesContext';
import { fetchRecipes } from '../services/fetchRecipes';

export default function SearchBar() {
  const { selected, setSelected, setResult, result } = useContext(HeaderContext);
  const { showType } = useContext(RecipesContext);
  const history = useHistory();

  const searchRecipesByURL = async (url) => {
    return await fetchRecipes(url);
  };

  const searchOptionsMap = useMemo(() => ({
    ingredient: (input, showType) =>
      `https://${process.env.REACT_APP_API_URL}/${showType}s/ingredient?q=${input}`,
    name: (input, showType) => `https://${process.env.REACT_APP_API_URL}/${showType}s/name?q=${input}`,
    firstLetter: (input, showType) =>
      `https://${process.env.REACT_APP_API_URL}/${showType}s/letter?q=${input}`,
  }), [showType]);

  const handleFilter = useCallback(async () => {
    // faz requisições a api através do que o usuário digitou e selecionou na SearchBar. Quando clica no botão search dispara essa função
    // if (
    //   selected.searchRadio === 'firstLetter'
    //   && selected.searchInput.length > 1
    // ) {
    //   return global.alert('Your search must have only 1 (one) character');
    // }
    // if (showType === 'meal') {
    //   if (selected.searchRadio === 'ingredient') {
    //     setResult(
    //       await fetchRecipes(
    //         `https://${process.env.REACT_APP_URL}/meals/ingredient?q=${selected.searchInput}`,
    //         // http://www.themealdb.com/api/json/v1/1/filter.php?i=${selected.searchInput}
    //         // localhost:3001/meals/ingredient?q=
    //       ),
    //     );
    //   } else if (selected.searchRadio === 'name') {
    //     setResult(
    //       await fetchRecipes(
    //         `https://${process.env.REACT_APP_URL}/meals/name?q=${selected.searchInput}`,
    //         // http://www.themealdb.com/api/json/v1/1/search.php?s=${selected.searchInput}
    //         // localhost:3001/meals/name?q=
    //       ),
    //     );
    //   } else {
    //     setResult(
    //       await fetchRecipes(
    //         `https://${process.env.REACT_APP_URL}/meals/letter?q=${selected.searchInput}`,
    //         // http://www.themealdb.com/api/json/v1/1/search.php?f=${selected.searchInput}
    //         // localhost:3001/meals/letter?q=
    //       ),
    //     );
    //   }
    // } else if (showType === 'drinks') {
    //   if (selected.searchRadio === 'ingredient') {
    //     setResult(
    //       await fetchRecipes(
    //         `https://${process.env.REACT_APP_URL}/drinks/ingredient?q=${selected.searchInput}`,
    //         // http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selected.searchInput}
    //         // localhost:3001/drinks/ingredient?q=
    //       ),
    //     );
    //   } else if (selected.searchRadio === 'name') {
    //     setResult(
    //       await fetchRecipes(
    //         `${process.env.REACT_APP_URL}/drinks/name?q=${selected.searchInput}`,
    //         // http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${selected.searchInput}
    //         // localhost:3001/drinks/name?q=
    //       ),
    //     );
    //   } else {
    //     setResult(
    //       await fetchRecipes(
    //         `https://${process.env.REACT_APP_URL}/drinks/letter?q=${selected.searchInput}`,
    //         // http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${selected.searchInput}
    //         // localhost:3001/drinks/letter?q=
    //       ),
    //     );
    //   }
    // }
    if (selected.searchRadio === 'firstLetter' && selected.searchInput.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }

    const searchURL = searchOptionsMap[selected.searchRadio](selected.searchInput, showType);
    setResult(await searchRecipesByURL(searchURL));
  }, [selected.searchRadio, selected.searchInput, setResult, showType, searchOptionsMap]);

  useEffect(() => {
    if (result.drinks?.length === 1 || result.meals?.length === 1) {
      if (showType === 'meal') {
        const { idMeal } = result.meals[0];
        history.push(`/meals/${idMeal}`);
      } else if (showType === 'drink') {
        const { idDrink } = result.drinks[0];
        history.push(`/drinks/${idDrink}`);
      }
    }
  }, [showType, result, history]);

  return (
    <form className="w-full">
      <div>
        <label htmlFor="searchInput">
          <input
            id="searchInput"
            type="text"
            className="border rounded-[4px] p-3 hover:outline-none
            focus:outline-none border-yellow-500 w-full mt-5"
            data-testid="search-input"
            value={ selected.searchInput }
            onChange={ (e) => setSelected({ ...selected, searchInput: e.target.value }) }
          />
        </label>
      </div>
      <div className="flex w-full justify-around mt-3">
        <label htmlFor="ingredient">
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            value="ingredient"
            name="searchRadio"
            onChange={ (e) => setSelected({ ...selected, searchRadio: e.target.value }) }
          />
          Ingredient
        </label>
        <label htmlFor="nameSearch">
          <input
            type="radio"
            id="nameSearch"
            data-testid="name-search-radio"
            value="name"
            name="searchRadio"
            onChange={ (e) => setSelected({ ...selected, searchRadio: e.target.value }) }
          />
          Name
        </label>
        <label htmlFor="firstLetterSearch">
          <input
            type="radio"
            id="firstLetterSearch"
            data-testid="first-letter-search-radio"
            value="firstLetter"
            name="searchRadio"
            onChange={ (e) => setSelected({ ...selected, searchRadio: e.target.value }) }
          />
          First letter
        </label>
      </div>

      <button
        type="button"
        data-testid="exec-search-btn"
        className="mt-5 w-full border p-2 bg-gradient-to-r
         from-gray-800 bg-gray-500 text-white rounded-[4px]
         hover:bg-slate-400 scale-105 duration-300 disabled:text-gray-500"
        onClick={ () => {
          handleFilter();
          setSelected({
            searchInput: '',
            searchRadio: '',
          });
        } }
      >
        Search
      </button>
    </form>
  );
}
