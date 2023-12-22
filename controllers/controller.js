import { pool } from "../database/postgres.js";

export const getUsers = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: "Error en la base de datos" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    res.json(response.rows);
  } catch (error) {
    return res.status(500).json({ message: message.error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const response = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [name, email]
    );
    console.log(response);
    res.json({
      message: "Users Added SuccesFully",
      body: {
        user: { name, email },
      },
    });
  } catch (error) {
    return res.status(500).json({ message: message.error });
  }
};
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const response = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    {
      name,
      email,
      id,
    }
  );
  res.json(`User Updated succesfully`);
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  console.log(response);
  res.json(`User ${id} deleted succesFully`);
};
