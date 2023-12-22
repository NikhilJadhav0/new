var mysql = require('mysql');
var con =mysql.createConnection({ 
host: "localhost",
user: "root",
password: "123456789",
database: "stddb"
})
con.connect(function(err) {
if (err) throw err;
console.log("connected!");
// var sql="INSERT INTO student (Rno, Sname, percentage) VALUES?";
// var values=[
// [11,'radha', 90],
// [12, 'nikhil', 99 ],
// [13,'krishna', 89],
// [14,'ram', 98],
// [15,'shruti',95],
// ];
// con.query(sql, [values], function(err, result){
// if(err)
// throw err;
// console.log("number of record inserted: "+result.affectedRows);
// });

//         con.query("SELECT * FROM student",function(err,result){
//                 if(err)
//                 throw err;
//                 console.log(result);
//         });

//         update code start from here
        
        var sql = "UPDATE student SET percentage = 90 WHERE Rno = 11";

con.query(sql, function (err, result,display) {

if (err) throw err;

console.log(result.affectedRows + " record updated");

 });

});