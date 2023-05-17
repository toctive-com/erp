import { connect } from 'mongoose';
import { env } from 'process';

export const initDatabase = async () => {
  await connect(env.DATABASE_URL);
  console.log(`connected to ${env.DATABASE_URL}`);
};

export default initDatabase;
