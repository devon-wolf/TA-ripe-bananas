/* eslint-disable no-console */
import app from './lib/app.js';
import { testConnection } from './lib/utils/database.js';

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
  testConnection();
});

process.on('exit', () => {
  console.log('Goodbye!');
});
