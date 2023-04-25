/** @format */
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_db", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
