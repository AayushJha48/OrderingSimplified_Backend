const express = require("express");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const userRouter = require('./router/userRouter');
const orderRouter = require('./router/orderRouter');
const productRouter = require('./router/productRouter');
const cartRouter = require('./router/cartRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(userRouter);
app.use(orderRouter);
app.use(productRouter);
app.use(cartRouter);


const PORT = process.env.PORT || 5000;

app.listen(5000,() =>{
  console.log("started");
});
