var mysql = require('mysql');
var con =mysql.createConnection({
host: "localhost",
user: "root",
password: "12345",
database: "empdb"
});
con.connect(function(err) {
if(err)
throw err;
console.log("connected!");
var sql = "CREATE TABLE employee (eid int primary key, ename VARCHAR(30), salary int)";
 con.query(sql, function(err, result){
if(err)
throw err;
console.log("Table created");

});
});