import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeDrinkCategory extends Model<InferAttributes<SequelizeDrinkCategory>,
InferCreationAttributes<SequelizeDrinkCategory>> {
  declare idCategory: number;
  declare strCategory: string;
}

SequelizeDrinkCategory.init(
  {
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    strCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize: db,
    modelName: 'drinks_categories',
    timestamps: false,
    underscored: true,
  },
);

export default SequelizeDrinkCategory;
