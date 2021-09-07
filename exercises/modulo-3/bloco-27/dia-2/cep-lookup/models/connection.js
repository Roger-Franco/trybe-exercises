// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'roger',
  password: 'roger727',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;