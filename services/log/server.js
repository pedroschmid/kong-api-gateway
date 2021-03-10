const express = require("express");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => res.json({ message: "Welcome to logs API." }));

server.post("/logs", (req, res) => {
    console.log(req.body)
})

server.listen(7000);
