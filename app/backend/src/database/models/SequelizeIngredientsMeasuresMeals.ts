import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeIngredientsMeasuresMeals extends Model<
InferAttributes<SequelizeIngredientsMeasuresMeals>,
InferCreationAttributes<SequelizeIngredientsMeasuresMeals>
> {
  declare idMeal: number;
  declare idIngredient: number;
  declare strMeasure: string;
}

SequelizeIngredientsMeasuresMeals.init({
  idMeal: {
    primaryKey: true,
    type: DataTypes.NUMBER,
    allowNull: true,
    onUpdate: 'CASCADE',
    field: 'id_meal',
  },
  idIngredient: {
    primaryKey: true,
    type: DataTypes.NUMBER,
    allowNull: false,
    onUpdate: 'CASCADE',
    field: 'id_ingredient',
  },
  strMeasure: {
    type: DataTypes.STRING,
    allowNull: false,
    onUpdate: 'CASCADE',
    field: 'str_measure',
  },
}, {
  sequelize: db,
  modelName: 'ingredients_measures_meals',
  timestamps: false,
  underscored: true,
});

export default SequelizeIngredientsMeasuresMeals;
