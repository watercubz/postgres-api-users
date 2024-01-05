import pkg from "pg";

const { Pool } = pkg;

const config = {
  user: "postgres",
  host: "localhost",
  password: "sosadev16",
  database: "users",
};

const pool = new Pool(config);

export { pool };
