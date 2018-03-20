var mysql  = require('mysql'); 

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs'
  });


  module.exports = connection;