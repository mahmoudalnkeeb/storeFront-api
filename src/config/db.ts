import { Pool } from 'pg';
import  dotenv from 'dotenv'

dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASS,
  POSTGRES_DB,
  POSTGRES_TEST_DB,
  ENV,
} = process.env;

let db: Pool;
if (ENV == 'dev') {
  db = new Pool({
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    password: POSTGRES_PASS,
    user: POSTGRES_USER,
  });
} else {
  db = new Pool({
    database: POSTGRES_TEST_DB,
    host: POSTGRES_HOST,
    password: POSTGRES_PASS,
    user: POSTGRES_USER,
  });
}


export default db;
