import database from '../utils/database';
import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;

class Review extends Model {}

Review.init({
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},
{ sequelize: database, timestamps: false }
);

export default Review;
