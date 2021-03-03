const express = require("express");
const morgan = require("morgan");

const { router } = require("./routes");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
