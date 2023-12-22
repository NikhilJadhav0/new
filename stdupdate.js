var mysql = require('mysql');

var con = mysql.createConnection({

host: "localhost",

user: "root",

password: "12345678",

database: "stddb"

});

con.connect(function(err) {

if (err) throw err;

var sql = "UPDATE student SET percentage = 90 WHERE Rno = 11";

con.query(sql, function (err, result,display) {

if (err) throw err;

console.log(result.affectedRows + " record updated");

});

con.query("SELECT *, name FROM student", function (err, result, fields) {

if (err) throw err;

console.log(result);

});

});