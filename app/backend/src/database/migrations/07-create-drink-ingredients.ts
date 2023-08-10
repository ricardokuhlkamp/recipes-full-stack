import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IIngredients } from '../../interfaces/drinks/IIngredients';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IIngredients>>('drinks_ingredients', {
      idIngredient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_ingredient',
      },
      strIngredient: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient',
      },
    })

  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks_ingredients')
  }
}