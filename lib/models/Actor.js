import database from '../utils/database';
import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;

class Actor extends Model {}

Actor.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATEONLY
  },
  pob: {
    type: DataTypes.TEXT
  }
},
{ sequelize: database, timestamps: false }
);

export default Actor;
