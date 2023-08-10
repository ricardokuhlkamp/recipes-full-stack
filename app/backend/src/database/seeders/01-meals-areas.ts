import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'meals_areas',
      [
        { 
          id_area: 1,
          str_area:'American'
        },
        {
          id_area: 2,
          str_area:'British'
        },
        {
          id_area: 3,
          str_area:'Canadian'
        },
        {
          id_area: 4,
          str_area:'Chinese'
        },
        {
          id_area: 5,
          str_area:'Croatian'
        },
        {
          id_area: 6,
          str_area:'Dutch'
        },
        {
          id_area: 7,
          str_area:'Egyptian'
        },
        {
          id_area: 8,
          str_area:'Filipino'
        },
        {
          id_area: 9,
          str_area:'French'
        },
        {
          id_area: 10,
          str_area:'Greek'
        },
        {
          id_area: 11,
          str_area:'Indian'
        },
        {
          id_area: 12,
          str_area:'Irish'
        },
        {
          id_area: 13,
          str_area:'Italian'
        },
        {
          id_area: 14,
          str_area:'Jamaican'
        },
        {
          id_area: 15,
          str_area:'Japanese'
        },
        {
          id_area: 16,
          str_area:'Kenyan'
        },
        {
          id_area: 17,
          str_area:'Malaysian'
        },
        {
          id_area: 18,
          str_area:'Mexican'
        },
        {
          id_area: 19,
          str_area:'Moroccan'
        },
        {
          id_area: 20,
          str_area:'Polish'
        },
        {
          id_area: 21,
          str_area:'Portuguese'
        },
        {
          id_area: 22,
          str_area:'Russian'
        },
        {
          id_area: 23,
          str_area:'Spanish'
        },
        {
          id_area: 24,
          str_area:'Thai'
        },
        {
          id_area: 25,
          str_area:'Tunisian'
        },
        {
          id_area: 26,
          str_area:'Turkish'
        },
        {
          id_area: 27,
          str_area:'Unknown'
        },
        {
          id_area: 28,
          str_area:'Vietnamese'
        },
      ],
      {} ,
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('meals_areas', {});
  },
};