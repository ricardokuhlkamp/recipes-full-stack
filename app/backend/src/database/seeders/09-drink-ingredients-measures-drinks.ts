import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'ingredients_measures_drinks',
      [
        { id_drink: 1, id_ingredient: 65, str_measure: "2 1/2 shots " },
        { id_drink: 1, id_ingredient: 101, str_measure: null },
        { id_drink: 1, id_ingredient: 102, str_measure: null },

        { id_drink: 2, id_ingredient: 3, str_measure:  "1 3/4 shot " },
        { id_drink: 2, id_ingredient: 103, str_measure:  "1 Shot " },
        { id_drink: 2, id_ingredient: 48, str_measure:  "1/4 Shot" },
        { id_drink: 2, id_ingredient: 36, str_measure:  "1/8 Shot" },

        { id_drink: 3, id_ingredient: 3, str_measure:  "2 shots " },
        { id_drink: 3, id_ingredient: 36, str_measure:  "1/2 shot " },
        { id_drink: 3, id_ingredient: 64, str_measure:  "1/2 shot " },
        { id_drink: 3, id_ingredient: 50, str_measure:  "1/2 shot" },
        { id_drink: 3, id_ingredient: 104, str_measure:  "1/2 Fresh" },

        { id_drink: 4, id_ingredient: 26, str_measure:  "1/3 part " },
        { id_drink: 4, id_ingredient: 105, str_measure:  "1/3 part " },
        { id_drink: 4, id_ingredient: 106, str_measure:  "1/3 part " },

        { id_drink: 5, id_ingredient: 100, str_measure:  "1 part " },
        { id_drink: 5, id_ingredient: 18, str_measure:  "5 parts " },

        { id_drink: 6, id_ingredient: 16, str_measure:  "1/3 " },
        { id_drink: 6, id_ingredient: 105, str_measure:  "1/3 " },
        { id_drink: 6, id_ingredient: 44, str_measure:  "1/3 " },

        { id_drink: 7, id_ingredient: 107, str_measure:  "1/2 shot Bacardi " },
        { id_drink: 7, id_ingredient: 108, str_measure:  "1/2 shot " },

        { id_drink: 8, id_ingredient: 109, str_measure:  "1 oz " },
        { id_drink: 8, id_ingredient: 3, str_measure:  "1 oz " },
        { id_drink: 8, id_ingredient: 110, str_measure:  "4 oz " },

        { id_drink: 9, id_ingredient: 39, str_measure:  "1/3 part " },
        { id_drink: 9, id_ingredient: 111, str_measure:  "1 shot " },
        { id_drink: 9, id_ingredient: 112, str_measure:  "1/3 part " },
        { id_drink: 9, id_ingredient: 113, str_measure:  "1/3 part " },

        { id_drink: 10, id_ingredient: 26, str_measure:  "1/3 shot " },
        { id_drink: 10, id_ingredient: 94, str_measure:  "1/3 shot " },
        { id_drink: 10, id_ingredient: 103, str_measure:  "1/3 shot " },

        { id_drink: 11, id_ingredient: 4, str_measure:  "2 oz " },
        { id_drink: 11, id_ingredient: 48, str_measure:  "1 oz " },
        { id_drink: 11, id_ingredient: 36, str_measure:  "1 tsp " },

        { id_drink: 12, id_ingredient: 107, str_measure:  "1 oz Bacardi " },
        { id_drink: 12, id_ingredient: 108, str_measure:  "1 oz" },

        { id_drink: 13, id_ingredient: 114, str_measure:  "4 cl " },
        { id_drink: 13, id_ingredient: 105, str_measure:  "8 cl " },
        { id_drink: 13, id_ingredient: 68, str_measure: null },

        { id_drink: 14, id_ingredient: 105, str_measure:  "1/3 " },
        { id_drink: 14, id_ingredient: 103, str_measure:  "1/3 " },
        { id_drink: 14, id_ingredient: 26, str_measure:  "1/4 " },

        { id_drink: 15, id_ingredient: 15, str_measure:  "1/2 oz " },
        { id_drink: 15, id_ingredient: 3, str_measure:  "1 oz " },
        { id_drink: 15, id_ingredient: 8, str_measure:  "1/2 oz " },
        { id_drink: 15, id_ingredient: 48, str_measure:  "1/2 tsp " },
        { id_drink: 15, id_ingredient: 36, str_measure:  "1 tsp " },
        { id_drink: 15, id_ingredient: 115, str_measure: null },

        { id_drink: 16, id_ingredient: 3, str_measure:  "6 cl" },
        { id_drink: 16, id_ingredient: 116, str_measure:  "2 dashes" },
        { id_drink: 16, id_ingredient: 117, str_measure:  "2 Fresh leaves" },

        { id_drink: 17, id_ingredient: 2, str_measure:  "1 1/2 oz " },
        { id_drink: 17, id_ingredient: 41, str_measure:  "1 oz " },

        { id_drink: 18, id_ingredient: 11, str_measure:  "1 dash" },
        { id_drink: 18, id_ingredient: 18, str_measure:  "1 oz" },
        { id_drink: 18, id_ingredient: 3, str_measure:  "1 oz" },
        { id_drink: 18, id_ingredient: 5, str_measure:  "1 oz" },

        { id_drink: 19, id_ingredient: 118, str_measure:  "2 1/2 oz " },
        { id_drink: 19, id_ingredient: 103, str_measure:  "1 splash " },
        { id_drink: 19, id_ingredient: 113, str_measure:  "Fill with " },

        { id_drink: 20, id_ingredient: 68, str_measure:  "1 part " },
        { id_drink: 20, id_ingredient: 119, str_measure:  "2 parts " },

        { id_drink: 21, id_ingredient: 71, str_measure: null },
        { id_drink: 21, id_ingredient: 120, str_measure: "Unsweetened " },
        { id_drink: 21, id_ingredient: 62, str_measure: null },

        { id_drink: 22, id_ingredient: 94, str_measure:  "2 cl " },
        { id_drink: 22, id_ingredient: 105, str_measure:  "2 cl " },
        { id_drink: 22, id_ingredient: 121, str_measure:  "2 cl " },

        { id_drink: 23, id_ingredient: 40, str_measure:  "1 1/2 oz" },
        { id_drink: 23, id_ingredient: 122, str_measure:  "1 1/2 oz" },
        { id_drink: 23, id_ingredient: 107, str_measure:  "1 oz" },
        { id_drink: 23, id_ingredient: 123, str_measure:  "1 tsp" },
        { id_drink: 23, id_ingredient: 36, str_measure:  "1 tsp" },
        { id_drink: 23, id_ingredient: 30, str_measure:  "1 tsp" },
        { id_drink: 23, id_ingredient: 124, str_measure:  "1 drop" },

        { id_drink: 24, id_ingredient: 35, str_measure:  "1/2 oz white " },
        { id_drink: 24, id_ingredient: 16, str_measure:  "1/2 oz " },
        { id_drink: 24, id_ingredient: 9, str_measure:  "1/2 oz " },
        { id_drink: 24, id_ingredient: 22, str_measure:  "1/2 oz " },
        { id_drink: 24, id_ingredient: 125, str_measure:  "1 oz " },

        { id_drink: 25, id_ingredient: 6, str_measure:  "2 oz " },
        { id_drink: 25, id_ingredient: 113, str_measure:  "2 oz " },
        { id_drink: 25, id_ingredient: 78, str_measure:  "2 oz " },
        { id_drink: 25, id_ingredient: 126, str_measure: null },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ingredients_measures_drinks', {});
  },
};
