exports.getProducts = (req, res, next) => {
  //TODO: Returns list of products
  res.json({
    msg: "Return product",
  });
};

exports.createProduct = (req, res, next) => {
  //TODO: Create new product
  res.json({
    msg: "Add a new Product",
  });
};

exports.getProductsDetails = (req, res, next) => {
  //TODO: Get details of the product
  res.json({
    msg: "Product Details",
  });
};
