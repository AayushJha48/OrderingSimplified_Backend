exports.getUsers = (req, res, next) => {
  //TODO: Return all the users in the database
  res.json({
    msg: "Returns all the users in the DB",
  });
};

exports.me = (req, res, next) => {
  res.json({
    msg: "Check function in actual product",
  });
};
