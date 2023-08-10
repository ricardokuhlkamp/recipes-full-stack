import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeMealCategory extends Model<InferAttributes<SequelizeMealCategory>,
InferCreationAttributes<SequelizeMealCategory>> {
  declare idCategory: CreationOptional<number>;
  declare strCategory: string;
  declare strCategoryThumb: string;
  declare strCategoryDescription: string;
}

SequelizeMealCategory.init({
  idCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  strCategoryThumb: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  strCategoryDescription: {
    type: DataTypes.TEXT({ length: 'medium' }),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'meals_categories',
  timestamps: false,
  underscored: true,
});

export default SequelizeMealCategory;
