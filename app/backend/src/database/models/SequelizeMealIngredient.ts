import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeMealIngredient extends Model<InferAttributes<SequelizeMealIngredient>,
InferCreationAttributes<SequelizeMealIngredient>> {
  declare idIngredient: CreationOptional<number>;
  declare strIngredient: string;
  declare strDescription: string;
  declare strType: string;
}

SequelizeMealIngredient.init({
  idIngredient: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strIngredient: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  strDescription: {
    type: DataTypes.TEXT('medium'),
    allowNull: true,
  },
  strType: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'meals_ingredients',
  timestamps: false,
  underscored: true,
});

export default SequelizeMealIngredient;
