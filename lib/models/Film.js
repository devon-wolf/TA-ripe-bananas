import database from '../utils/database';
import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;

class Film extends Model {}

Film.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  released: {
    type: DataTypes.INTEGER
  }
},
{ sequelize: database, timestamps: false }
);

export default Film;
