const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const userRouter = require('./router/userRouter');
const orderRouter = require('./router/orderRouter');
const productRouter = require('./router/productRouter');
const cartRouter = require('./router/cartRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/cart', cartRouter);


const PORT = process.env.PORT || 5000;

app.listen(5000,() =>{
  console.log("started");
});
