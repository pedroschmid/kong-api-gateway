const express = require("express");

const server = express();

const users = [
  { username: "Pedro", password: "pedro123" },
  { username: "Joao", password: "joao123" },
  { username: "Caio", password: "caio123" },
  { username: "Sandro", password: "sandro123" }
];

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => res.json({ message: "Welcome to users API." }));

server.get("/list", (req, res) => {
  return res.json(users);
});

server.listen(5000);
