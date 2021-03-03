const { pool } = require("./database.js");
const { isEmpty, comparePassword } = require("./helper.js")


function login(request, response) { 
    const { username, password } = request.body;

    pool.query("SELECT * FROM users WHERE username = $1", [username], (error, { rows }) => {
        if (error || isEmpty(rows) ) return response.json({ message: "Internal server error!" });

        const hash = rows[0].password
        const isValid = comparePassword(password, hash);

        isValid
          ? response.json({ message: "User logged successfully!" })
          : response.json({ message: "Invalid credentials!" })
    })
}

module.exports = { login }