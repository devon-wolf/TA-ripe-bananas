/* eslint-disable no-console */
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false
});

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Sequelize connected!');
  }
  catch (error) {
    console.error('problem: ', error);
  }
};

export default sequelize;
