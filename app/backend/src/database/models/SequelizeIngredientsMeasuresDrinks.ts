import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeIngredientsMeasuresDrinks extends Model<
InferAttributes<SequelizeIngredientsMeasuresDrinks>,
InferCreationAttributes<SequelizeIngredientsMeasuresDrinks>
> {
  declare idDrink: number;
  declare idIngredient: number;
  declare strMeasure: string;
}

SequelizeIngredientsMeasuresDrinks.init({
  idDrink: {
    type: DataTypes.NUMBER,
    allowNull: true,
    onUpdate: 'CASCADE',
    field: 'id_drink',
  },
  idIngredient: {
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
  modelName: 'ingredients_measures_drinks',
  timestamps: false,
  underscored: true,
});

export default SequelizeIngredientsMeasuresDrinks;
