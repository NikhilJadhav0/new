var mysql = require('mysql');
var con =mysql.createConnection({ 
host: "localhost",
user: "root",
password: "12345",
database: "empdb"
})
con.connect(function(err) {
if (err) throw err;
console.log("connected!");
var sql="INSERT INTO employee (eid, ename, salary) VALUES?";
var values=[
[11,'radha', 10000],
[12, 'nikhil', 200000 ],
[13,'krishna', 30000],
[14,'ram', 50000],
[15,'shruti',70000],
];
con.query(sql, [values], function(err, result){
if(err)
throw err;
console.log("number of record inserted: "+result.affectedRows);
});

        con.query("SELECT * FROM employee",function(err,result){
                if(err)
                throw err;
                console.log(result);
        });
});