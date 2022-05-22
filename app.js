const express = require("express");
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
const userRouter = require('./router/userRouter');
const orderRouter = require('./router/orderRouter');
const productRouter = require('./router/productRouter');
const cartRouter = require('./router/cartRouter');

const app = express();

const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    database        : 'ordering_simplified'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(userRouter);
app.use(orderRouter);
app.use(productRouter);
app.use(cartRouter);

app.get('/', (req, res) =>;
  pool.query('select * from users', (err, row) => {
    if(err) {
      console.error(err);
    } else {
      console.log(row);
    }
  });
});


const PORT = process.env.PORT || 5000;

app.listen(5000,() =>{
  console.log("started");
});
