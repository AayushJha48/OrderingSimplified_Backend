const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const db = require('../db.js');


exports.signUp = (req, res, next) => {

  db.query("SELECT email FROM users where email = ?", [req.body.email], function(err, rows, fields) {
   // Connection is automatically released when query resolves
   if(rows.length === 1) {
     return res.json({
       err: "User already exists"
     })
   }


   const user = {
     // id: uuidv4(),
     name: req.body.name,
     number: req.body.number,
     email: req.body.email,
     password: req.body.password
   }

   db.query("INSERT INTO users(name, number, email, password) values (?, ?, ?, ?)", [user.name, user.number, user.email, user.password], (err, rows) => {
     if(err) {
       console.log(err);
       return res.json({msg: "Error in adding user"})
     }

     return res.json({
       msg: "User is added"
     })
   })
  })
};

exports.signIn = (req, res, next) => {

  db.query("SELECT id, email, password FROM users where email = ?", [req.body.email], function(err, user, fields) {
   // Connection is automatically released when query resolves
   if(user.length === 0) {
     return res.json({
       err: "User doesn't exist"
     })
   }

   console.log(user);
   console.log(fields);

   if(user[0].password !== req.body.password) {
     return res.json({
       err: "Password incorrect"
     })
   } else {

      jwt.sign({ email: user[0].email, id: user[0].id }, "This is my private key", function(err, token) {
        console.log(token);
        if(err) {
          console.log(err);
          return res.json({
            err: "Unable to loggin"
          })
        } else {
          return res.json({
            token
          })
        }
      });
   }
}) };

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
