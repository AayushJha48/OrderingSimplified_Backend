const jwt = require('jsonwebtoken');

exports.signUp = (req, res, next) => {

  console.log(req.body);

  res.json({
    msg: "SignUp user",
  });
};

exports.signIn = (req, res, next) => {
  res.json({
    msg: "SignIn User",
  });
};

exports.protect = (req, res, next) => {
  // Middleware to protect each route
  res.json({
    msg: "",
  });
};

// TODO: Update this function
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.currentUser.role)) next();
    else {
      res.status(403).json({
        status: "fail",
        message: "You are not authorized to access this route",
      });
    }
  };
};

exports.checkUser = (req, res, next) => {
  res.json({
    msg: "Check user",
  });
};

exports.logOut = (req, res, next) => {
  res.json({
    msg: "Logout user",
  });
};
