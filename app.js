const express = require("express");
const app = express();
const mysql = require("mysql2");

const userRouter = require('./router/userRouter');
const orderRouter = require('./router/orderRouter');
const productRouter = require('./router/productRouter');
const cartRouter = require('./router/cartRouter');

const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    database        : 'ordering_simplified'
});

// Routes
app.use(userRouter);
app.use(orderRouter);
app.use(productRouter);
app.use(cartRouter);


const PORT = process.env.PORT || 5000;

app.listen(5000,() =>{
  console.log("started");
});
