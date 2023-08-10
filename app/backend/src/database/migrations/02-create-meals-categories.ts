import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ICategory } from '../../interfaces/meals/ICategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICategory>>('meals_categories', {
      idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_category'
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_category',
      },
      strCategoryThumb: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_category_thumb',
      },
      strCategoryDescription: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
        field: 'str_category_description',
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals_categories');
  },
};