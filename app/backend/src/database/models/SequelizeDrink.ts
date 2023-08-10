import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeDrinkCategory from './SequelizeDrinkCategory';
import SequelizeDrinkIngredient from './SequelizeDrinkIngredient';
import SequelizeIngredientsMeasuresDrinks from './SequelizeIngredientsMeasuresDrinks';

class SequelizeDrink extends Model<InferAttributes<SequelizeDrink>,
InferCreationAttributes<SequelizeDrink>> {
  declare idDrink: CreationOptional<number>;
  declare strDrink: string;
  declare strDrinkAlternate: string;
  declare strTags: string;
  declare strVideo: string;
  declare idCategory: string;
  declare strIba: string;
  declare strAlcoholic: string;
  declare strGlass: string;
  declare strInstructions: string;
  declare strDrinkThumb: string;
  declare strImageSource: string;
  declare strImageAttribution: string;
  declare strCreativeCommonsConfirmed: string;
  declare dateModified: Date | null;
}

SequelizeDrink.init(
  {
    idDrink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    strDrink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strDrinkAlternate: {
      type: DataTypes.STRING,
    },
    strTags: {
      type: DataTypes.STRING,
    },
    strVideo: {
      type: DataTypes.STRING,
    },
    idCategory: {
      type: DataTypes.NUMBER,
      allowNull: false,
      onUpdate: 'CASCADE',
    },
    strIba: {
      type: DataTypes.STRING,
    },
    strAlcoholic: {
      type: DataTypes.STRING,
    },
    strGlass: {
      type: DataTypes.STRING,
    },
    strInstructions: {
      type: DataTypes.TEXT('medium'),
    },
    strDrinkThumb: {
      type: DataTypes.STRING,
    },
    strImageSource: {
      type: DataTypes.STRING,
    },
    strImageAttribution: {
      type: DataTypes.STRING,
    },
    strCreativeCommonsConfirmed: {
      type: DataTypes.STRING,
    },
    dateModified: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: db,
    modelName: 'drinks',
    timestamps: false,
    underscored: true,
    // updatedAt: 'dateModified',
  },
);

SequelizeDrinkCategory.hasMany(
  SequelizeDrink,
  { foreignKey: 'idCategory', as: 'categoryDrinks' },
);
SequelizeDrink.belongsTo(
  SequelizeDrinkCategory,
  { foreignKey: 'idCategory', as: 'strCategory' },
);

SequelizeDrink.belongsToMany(SequelizeDrinkIngredient, {
  through: SequelizeIngredientsMeasuresDrinks,
  as: 'strIngredient',
  foreignKey: 'id_drink',
  otherKey: 'id_ingredient',
});

SequelizeDrinkIngredient.belongsToMany(SequelizeDrink, { through: SequelizeIngredientsMeasuresDrinks, as: 'drinks', foreignKey: 'id_ingredient', otherKey: 'id_drink' });

export default SequelizeDrink;
