require("dotenv").config();
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({

  host: process.env.LAMINERDSHOST,
  user: process.env.LAMINERDSUSER,
  password: process.env.LAMINERDSPASSWORD,
  port: process.env.LAMINERDSPORT,
  database: process.env.LAMINERDSDATABASE

});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful ');
});


module.exports = con