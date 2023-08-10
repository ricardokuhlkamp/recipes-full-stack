import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IDrink } from '../../interfaces/drinks/IDrink';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDrink>>('drinks', {
      idDrink: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_drink',
      },
      strDrink: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_drink',
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
        field: 'str_drink_alternate',
      },
      strTags: {
        type: DataTypes.STRING,
        field: 'str_tags',
      },
      strVideo: {
        type: DataTypes.STRING,
        field: 'str_video',
      },
      idCategory: {
        type: DataTypes.INTEGER,
        field: 'id_category',
        references: {
          model: 'drinks_categories',
          key: 'id_category',
        },
        onUpdate: 'CASCADE',
      },
      strIba: {
        type: DataTypes.STRING,
        field: 'str_iba',
      },
      strAlcoholic: {
        type: DataTypes.STRING,
        field: 'str_alcoholic',
      },
      strGlass: {
        type: DataTypes.STRING,
        field: 'str_glass',
      },
      strInstructions: {
        type: DataTypes.TEXT('medium'),
        field: 'str_instructions',
      },
      strDrinkThumb: {
        type: DataTypes.STRING,
        field: 'str_drink_thumb',
      },
      strImageSource: {
        type: DataTypes.STRING,
        field: 'str_image_source',
      },
      strImageAttribution: {
        type: DataTypes.STRING,
        field: 'str_image_attribution',
      },
      strCreativeCommonsConfirmed: {
        type: DataTypes.STRING,
        field: 'str_creative_commons_confirmed',
      },
      dateModified: {
        type: DataTypes.DATE,
        field: 'date_modified',
      }
    })

  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks')
  }
}