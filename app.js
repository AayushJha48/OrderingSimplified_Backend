const express = require("express");
const app = express();
const mysql = require("mysql2");

app.get("/", (req, res) => {
  console.log("Route hit");
  res.json({
    msg: "Hello World",
  });



const PORT = process.env.PORT || 5000;
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'password',
    database        : 'ordering_simplified'
});

pool.promise()
console.log(pool,"1234567");
// .then((p)=>{
//   console.log(p);
//   app.listen(PORT, () => {
//   console.log("Server started at port 5000");
// });});

app.listen(5000,() =>{
  console.log("started");
});


pool.getConnection((err, connection) => {
     if(err) console.log(err,"klfjdslklj;fa");
     console.log('connected as id ' + connection.threadId)
     connection.query('SELECT * from users', (err, rows) => {
         connection.release() // return the connection to pool

         if (!err) {
             res.send(rows)
             console.log(rows)
         } else {
             console.log(err)
         }

         // if(err) throw err
         console.log('The data from beer table are: \n', rows)
     })
 })
});
