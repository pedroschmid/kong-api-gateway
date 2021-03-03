const express = require("express");

const { list, find, store, update, destroy } = require("./controller.js");

const router = express.Router();

router.get("/list", list);
router.get("/find/:id", find);
router.post("/store", store);
router.put("/update/:id", update);
router.delete("/delete/:id", destroy);

module.exports = { router };
