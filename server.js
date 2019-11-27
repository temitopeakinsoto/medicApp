const express = require("express");
const cors = require("cors");
const db = require("./data/db.js");
const usersRouter = require('./api/users/users-router');

const server = express();
server.use(express.json());


server.use("/api/users", usersRouter);
module.exports = server;




