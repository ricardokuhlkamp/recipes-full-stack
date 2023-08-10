import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import SequelizeDrinksIngredients from './SequelizeDrinksIngredients';
import SequelizeDrink from './SequelizeDrink';

class SequelizeDrinkIngredientMeasure extends Model<
InferAttributes<SequelizeDrinkIngredientMeasure>,
InferCreationAttributes<SequelizeDrinkIngredientMeasure>
> {
  declare idDrink: number;
  declare idIngredient: number;
  declare idMeasure: number;
}

SequelizeDrinkIngredientMeasure.init({
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
  idMeasure: {
    type: DataTypes.NUMBER,
    allowNull: false,
    onUpdate: 'CASCADE',
    field: 'id_measure',
  },
}, {
  sequelize: db,
  modelName: 'drinks_measures_ingredients',
  timestamps: false,
  underscored: true,
});

SequelizeDrink.belongsToMany(
  SequelizeDrinksIngredients,
  { through: SequelizeDrinkIngredientMeasure },
);

SequelizeDrinksIngredients.belongsToMany(SequelizeDrink, {
  through: SequelizeDrinkIngredientMeasure,
});

export default SequelizeDrinkIngredientMeasure;
