const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/database");
const bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db();

app.use("/images/", express.static("images"));
app.use(express.static("pages"));

app.use("/api/products", require("./route/products"));
app.use("/api/auth", require("./route/auth"));
app.use("/api/cart", require("./route/cart"));

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
