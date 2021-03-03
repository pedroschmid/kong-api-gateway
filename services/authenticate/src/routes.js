const express = require("express");

const { login } = require("./controller.js");

const router = express.Router();

router.post("/login", login);

module.exports = { router };
