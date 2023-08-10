import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMeal } from '../../interfaces/meals/IMeal';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMeal>>('meals', {
      idMeal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_meal',
      },
      strMeal: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_meal',
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
        field: 'str_drink_alternate',
      },
      idArea: {
        type: DataTypes.INTEGER,
        field: 'id_area',
        references: {
          model: 'meals_areas',
          key: 'id_area',
        },
        onUpdate: 'CASCADE',
      },
      idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_category',
        references: {
          model: 'meals_categories',
          key: 'id_category',
        },
        onUpdate: 'CASCADE',
      },
      strInstructions: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
        field: 'str_instructions',
      },
      strMealThumb: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_meal_thumb',
      },
      strTags: {
        type: DataTypes.STRING,
        field: 'str_tags',
      },
      strYoutube: {
        type: DataTypes.STRING,
        field: 'str_youtube',
      },
      strSource: {
        type: DataTypes.STRING,
        field: 'str_source',
      },
      strImageSource: {
        type: DataTypes.STRING,
        field: 'str_image_source',
      },
      strCreativeCommonsConfirmed: {
        type: DataTypes.STRING,
        field: 'str_creative_commons_confirmed',
      },
      dateModified: {
        type: DataTypes.DATE,
        field: 'date_modified',
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals');
  },
};