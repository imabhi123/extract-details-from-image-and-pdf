import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    // Return a success message
     return 'Successfully connected to database';
  } catch (error) {
    console.log('error->', error);

    // Return an error message
    return `Failed to connect to database: ${error.message}`;
  } finally {
    await mongoose.disconnect();
  }
};

export default connectToDB;