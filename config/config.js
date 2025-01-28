require('dotenv').config();  // Menggunakan dotenv untuk mengakses variabel lingkungan

const config = {
  "production": {
    "username": process.env.DB_USERNAME,  // Mengakses variabel lingkungan dengan benar
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "development": {
    "username": process.env.DB_USERNAME || "postgres",  // Default untuk development
    "password": process.env.DB_PASSWORD || "12345678",
    "database": process.env.DB_NAME || "toko_bakri",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "12345678",
    "database": process.env.DB_NAME || "toko_bakri",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "postgres"
  }
};

module.exports = config;
