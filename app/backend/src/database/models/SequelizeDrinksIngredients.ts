import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeDrinksIngredients extends Model<InferAttributes<SequelizeDrinksIngredients>,
InferCreationAttributes<SequelizeDrinksIngredients>> {
  declare idIngredient: number;
  declare strIngredient: string;
}

SequelizeDrinksIngredients.init(
  {
    idIngredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    strIngredient: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize: db,
    modelName: 'drinks_ingredients',
    timestamps: false,
    underscored: true,
  },
);

export default SequelizeDrinksIngredients;
