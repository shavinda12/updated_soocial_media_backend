const {createPool}=require('mysql')
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "socialmedia",
    connectionLimit: 10,
  });
  module.exports = pool;