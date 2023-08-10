import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeMealArea extends Model<
InferAttributes<SequelizeMealArea>,
InferCreationAttributes<SequelizeMealArea>
> {
  declare idArea: number;
  declare strArea: string;
}

SequelizeMealArea.init({
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strArea: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'meals_areas',
  timestamps: false,
  underscored: true,
});

export default SequelizeMealArea;
