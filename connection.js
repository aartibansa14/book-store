const mysql = require('mysql');

const conn= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'online book store' // Specify the database you want to use
});


module.exports=conn;