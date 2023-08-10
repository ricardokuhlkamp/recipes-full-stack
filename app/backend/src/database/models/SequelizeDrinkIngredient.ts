import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeDrinkIngredient extends Model<InferAttributes<SequelizeDrinkIngredient>,
InferCreationAttributes<SequelizeDrinkIngredient>> {
  declare idIngredient: CreationOptional<number>;
  declare strIngredient: string;
}

SequelizeDrinkIngredient.init(
  {
    idIngredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    strIngredient: {
      type: DataTypes.STRING(100),
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

export default SequelizeDrinkIngredient;
