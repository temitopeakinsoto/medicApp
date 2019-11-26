const express = require("express");
const cors = require("cors");
const db = require("./data/db.js");
const app = express();
app.use(cors());
app.use(express.json());
const errorMessage = "There was an error with this request...";




