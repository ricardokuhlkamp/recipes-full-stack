import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IArea } from '../../interfaces/meals/IArea';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IArea>>('meals_areas', {
      idArea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_area',
      },
      strArea: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_area',
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals_areas');
  },
};
