import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    // eslint-disable-next-line no-console
    console.log('Connected to the database');

    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`app listening on port ${config.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to the database:', error);
  }
}
main();
