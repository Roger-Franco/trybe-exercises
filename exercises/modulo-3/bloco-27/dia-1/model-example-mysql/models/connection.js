const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'roger',
  password: 'roger727',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;