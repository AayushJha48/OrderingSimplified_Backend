exports.createOrder = (req, res, next) => {
  //TODO: create order

  res.json({
    msg: "Create your order",
  });
};

exports.getYourOrder = (req, res, next) => {
  res.json({
    msg: "Get your order",
  });
};
