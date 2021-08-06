import database from '../utils/database';
import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;

class Reviewer extends Model {}

Reviewer.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  company: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},
{ sequelize: database, timestamps: false }
);

export default Reviewer;
