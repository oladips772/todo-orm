/** @format */
const express = require("express");

const sequelize = require("./db");
const Todo = require("./models/Todo");
const app = express();
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");
});
