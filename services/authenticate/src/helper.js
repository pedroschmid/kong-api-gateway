const bcrypt = require("bcrypt");

function isEmpty(array) {
  return array.length > 0 ? false : true;
}

function comparePassword(password, hash) {
  try {
    return bcrypt.compareSync(password, hash);
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { isEmpty, comparePassword };
