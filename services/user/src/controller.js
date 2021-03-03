const { pool } = require("./database.js");
const { hashPassword } = require("./helpers");

function list(request, response) {
  const query = `SELECT * FROM users`;

  pool.query(query, (error, { rows }) => {
    if (error) return response.json({ message: "Internal server error!" });

    return response.json(rows);
  });
}

function find(request, response) {
  const { id } = request.params;

  const query = `SELECT * FROM users WHERE id = $1`;

  pool.query(query, [id], (error, { rows }) => {
    if (error) return response.json({ message: "Internal server error!" });

    return response.json(rows);
  });
}

function store(request, response) {
  const { username, email, password } = request.body;

  const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

  pool.query(query, [username, email, hashPassword(password)], (error, result) => {
    if (error) return response.json({ message: "Internal server error!" });
    
    return response.json({ message: "User created successfully!" });
  });
}

function update(request, response) {
  const { id } = request.params;
  const { username, email, password } = request.body;

  const query = `UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4`;

  pool.query(query, [username, email, hashPassword(password), id], (error, result) => {
    if (error) return response.json({ message: "Internal server error!" });

    return response.json({ message: "User updated successfully!" });
  });
}

function destroy(request, response) {
  const { id } = request.params;

  const query = `DELETE FROM users WHERE id = $1`;

  pool.query(query, [id], (error, result) => {
    if (error) return response.json({ message: "Internal server error!" });

    return response.json({ message: "User deleted successfully!" });
  });
}

module.exports = {
  list,
  find,
  store,
  update,
  destroy,
};
