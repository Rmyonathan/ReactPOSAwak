const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("colors");

// rest object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the POS BACKEND SERVER!</h1>");
});

// Port
const POST = process.env.PORT || 8080;

// Listen
app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`.bgCyan.white);
});
