const express = require("express");

const server = express();

const products = [];

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) =>
  res.json({ message: "Welcome to products API." })
);

server.get("/list", (req, res) => {
  return res.json(products);
});

server.post("/store", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(500).json({ message: "Internal server error." });
  }

  products.push({ name });

  return res.json({ message: "Product added successfully." });
});

server.listen(5000);
