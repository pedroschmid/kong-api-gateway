const bcrypt = require("bcrypt");

function hashPassword(password) {
  const saltRounds = 10;

  try {
    return bcrypt.hashSync(password, saltRounds);
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { hashPassword };
