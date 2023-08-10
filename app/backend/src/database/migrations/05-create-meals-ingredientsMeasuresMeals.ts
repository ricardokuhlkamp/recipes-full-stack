import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IIngredientsMeasuresMeals } from '../../interfaces/meals/IIngredientsMeasuresMeals';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IIngredientsMeasuresMeals>>('ingredients_measures_meals', {
      idMeal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_meal',
        primaryKey: true,
        references: {
          model: 'meals',
          key: 'id_meal'
        }
      },
      idIngredient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_ingredient',
        primaryKey: true,
        references: {
          model: 'meals_ingredients',
          key: 'id_ingredient'
        }
      },
      strMeasure: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'str_measure',        
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('ingredients_measures_meals');
  },
};