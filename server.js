import app from './lib/app.js';
import { testConnection } from './lib/utils/database.js';

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
  testConnection();
});

process.on('exit', () => {
  console.log('Goodbye!');
});
