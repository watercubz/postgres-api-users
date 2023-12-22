import pkg from "pg";

const { Pool } = pkg;

const config = {
  user: "postgres",
  host: "localhost",
  password: "sosadev16", // <--- your password postgrest
  database: "users",
};

const pool = new Pool(config);

export const getUsers = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query("SELECT * FROM users");
    return res.rows;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
};

export { pool };
