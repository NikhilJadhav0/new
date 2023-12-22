var mysql = require('mysql');

var con =mysql.createConnection({ 
host: "localhost",
user: "root",
password: "123456789"
});

con.connect(function(err) {

if (err) 
throw err; 
console.log("connected!"); 
con.query("CREATE DATABASE stddb", function(err, result){

if(err) throw err;

console.log("Database created");

});

});