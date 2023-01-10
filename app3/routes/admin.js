const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  
    res.send(`<form action="/admin/add-product" method="POST">
            <input type="text" name="title" placeholder="Enter Product Name">
            <input type="number" name="size" placeholder="Enter Size"><br><br>
            <button type="submit">Add Product</button>
            </form>`); // text/html
   
});

// /admin/product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop/product');
   
});

module.exports = router;

