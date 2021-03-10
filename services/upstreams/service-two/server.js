const express = require("express");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => res.json({ message: "Upstream service 2" }));

server.listen(6001);
