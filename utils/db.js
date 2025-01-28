const { Sequelize } = require("sequelize");
require("dotenv/config");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging:
      process.env.NODE_ENV !== "production"
        ? (...msg) => console.log(msg)
        : false,
    dialectOption: {
      reqiestTimeout: 30000,
      encrypt: true,
    },
  }
);

module.exports = sequelize;
