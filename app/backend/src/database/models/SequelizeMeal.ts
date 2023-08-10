import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeIngredientsMeasuresMeals from './SequelizeIngredientsMeasuresMeals';
import SequelizeMealArea from './SequelizeMealArea';
import SequelizeMealIngredient from './SequelizeMealIngredient';
import SequelizeMealCategory from './SequelizeMealCategory';

class SequelizeMeal extends Model<
InferAttributes<SequelizeMeal>,
InferCreationAttributes<SequelizeMeal>
> {
  declare idMeal: CreationOptional<number>;
  declare strMeal: string;
  declare strDrinkAlternate: string;
  declare idArea: number; // meals_area: idArea
  declare idCategory: number;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strTags: string;
  declare strYoutube: string;
  declare strSource: string;
  declare strImageSource: string;
  declare strCreativeCommonsConfirmed: string;
  declare dateModified: Date | null;
}

SequelizeMeal.init({
  idMeal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strMeal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strDrinkAlternate: {
    type: DataTypes.STRING,
  },
  idArea: {
    type: DataTypes.NUMBER,
    onUpdate: 'CASCADE',
  },
  idCategory: {
    type: DataTypes.NUMBER,
    allowNull: false,
    onUpdate: 'CASCADE',
  },
  strInstructions: {
    type: DataTypes.TEXT('medium'),
    allowNull: false,
  },
  strMealThumb: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strTags: {
    type: DataTypes.STRING,
  },
  strYoutube: {
    type: DataTypes.STRING,
  },
  strSource: {
    type: DataTypes.STRING,
  },
  strImageSource: {
    type: DataTypes.STRING,
  },
  strCreativeCommonsConfirmed: {
    type: DataTypes.STRING,
  },
  dateModified: {
    type: DataTypes.DATE,
  },
}, {
  sequelize: db,
  modelName: 'meals',
  timestamps: false,
  underscored: true,
  // createdAt: 'date_modified',
  // updatedAt: 'date_modified',
});

SequelizeMealArea.hasMany(SequelizeMeal, { foreignKey: 'idArea', as: 'areaMeals' });
SequelizeMeal.belongsTo(SequelizeMealArea, { foreignKey: 'idArea', as: 'strArea' });

SequelizeMealCategory.hasMany(SequelizeMeal, { foreignKey: 'idCategory', as: 'categoryMeals' });
SequelizeMeal.belongsTo(SequelizeMealCategory, { foreignKey: 'idCategory', as: 'strCategory' });

SequelizeMeal.belongsToMany(SequelizeMealIngredient, {
  through: SequelizeIngredientsMeasuresMeals,
  as: 'strIngredient',
  foreignKey: 'id_meal',
  otherKey: 'id_ingredient',
});
SequelizeMealIngredient.belongsToMany(SequelizeMeal, { through: SequelizeIngredientsMeasuresMeals, as: 'meals', foreignKey: 'idIngredient', otherKey: 'idMeal' });

export default SequelizeMeal;
