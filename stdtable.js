var mysql = require('mysql');
var con =mysql.createConnection({
host: "localhost",
user: "root",
password: "123456789",
database: "stddb"
});
con.connect(function(err) {
if(err)
throw err;
console.log("connected!");
var sql = "CREATE TABLE student (Rno int primary key, Sname VARCHAR(30), percentage int)";
 con.query(sql, function(err, result){
if(err)
throw err;
console.log("Table created");

});
});