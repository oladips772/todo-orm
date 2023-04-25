/** @format */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Todo extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Todo",
  }
);

module.exports = Todo;
