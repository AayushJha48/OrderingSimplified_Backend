exports.addItem = (req, res, next) => {
  //TODO: Add item to the Cart
  res.json({
    msg: "Add Item",
  });
};

exports.getItemsByUser = (req, res, next) => {
  //TODO: Get USERS items
  res.json({
    msg: "Get Items of a user",
  });
};

exports.deleteItem = (req, res, next) => {
  //TODO: Delete item from cart
  res.json({
    msg: "Delete Item",
  });
};
