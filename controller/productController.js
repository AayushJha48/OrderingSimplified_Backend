const db = require('../db.js');

exports.getProducts = (req, res, next) => {

  db.query("SELECT id, name, cover_image FROM products", [], function(err, rows, fields) {
   // Connection is automatically released when query resolves
   if(err) {
     return res.json({
       msg: 'Unable to get Products'
     })
   }

   res.json({
     msg: rows
   })
  })
};

exports.createProduct = (req, res, next) => {
  //TODO: Create new product
  db.query("INSERT INTO products(name, description, category, shopkeeper_id, price, discount, cover_image, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [req.body.name, req.body.description, req.body.category, req.body.shopkeeper_id, req.body.price, req.body.discount, req.body.cover_image, req.body.images], (err, rows) => {
    if(err) {
      console.log(err);
      return res.json({msg: "Error in adding user"})
    }

    return res.json({
      msg: rows
    })
  })
};

exports.getProductsDetails = (req, res, next) => {
  db.query("SELECT * FROM products WHERE id=?", [req.params.id], function(err, rows, fields) {
   // Connection is automatically released when query resolves
   if(err) {
     return res.json({
       msg: 'Unable to get Products'
     })
   }

   res.json({
     msg: rows
   })
  })
};
