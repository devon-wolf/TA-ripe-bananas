import database from '../utils/database';
import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;

class Studio extends Model {}

Studio.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.TEXT
    },
    state: {
      type: DataTypes.TEXT
    },
    country: {
      type: DataTypes.TEXT
    }
  },
  { sequelize: database, timestamps: false }
);
export default Studio;
