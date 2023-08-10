import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('drinks_categories', 
    [
      {
        id_category: 1,
        str_category: "Ordinary Drink"
      },
      {
        id_category: 2,
        str_category: "Cocktail"
      },
      {
        id_category: 3,
        str_category: "Shake"
      },
      {
        id_category: 4,
        str_category: "Other / Unknown"
      },
      {
        id_category: 5,
        str_category: "Cocoa"
      },
      {
        id_category: 6,
        str_category: "Shot"
      },
      {
        id_category: 7,
        str_category: "Coffee / Tea"
      },
      {
        id_category: 8,
        str_category: "Homemade Liqueur"
      },
      {
        id_category: 9,
        str_category: "Punch / Party Drink"
      },
      {
        id_category: 10,
        str_category: "Beer"
      },
      {
        id_category: 11,
        str_category: "Soft Drink"
      }
    ],
    {},
    )
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drinks_categories', {});
  }
}