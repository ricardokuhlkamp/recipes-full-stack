import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IDrinkIngredientMeasure } from '../../interfaces/drinks/IDrinkIngredientMeasure';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDrinkIngredientMeasure>>('ingredients_measures_drinks', {
      idDrink: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_drink',
        primaryKey: true,
        references: {
          model: 'drinks',
          key: 'id_drink'
        }
      },
      idIngredient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_ingredient',
        primaryKey: true,
        references: {
          model: 'drinks_ingredients',
          key: 'id_ingredient'
        }
      },
      strMeasure: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'str_measure',        
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('ingredients_measures_drinks')
  }
}