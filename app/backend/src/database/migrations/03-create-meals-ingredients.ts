import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IIngredient } from '../../interfaces/meals/IIngredient';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IIngredient>>('meals_ingredients', {
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
      strDescription: {
        type: DataTypes.TEXT('medium'),
        allowNull: true,
        field: 'str_description',
      },
      strType: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'str_type',
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals_ingredients');
  },
};