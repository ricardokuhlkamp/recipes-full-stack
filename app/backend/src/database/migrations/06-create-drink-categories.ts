import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ICategory } from '../../interfaces/drinks/ICategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICategory>>('drinks_categories', {
      idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_category',
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_category',
      },
    })

  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks_categories');
  }
}