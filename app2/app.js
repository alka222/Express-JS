const express = require('express');

const bodyParser = require('body-parser');
 
const app = express();

app.use(bodyParser.urlencoded({extended : false}));

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next(); 
// });

app.use('/add-product', (req, res, next) => {
    // console.log('In the next middleware');
    res.send(`<form action="/product" method="POST">
            <input type="text" name="title" placeholder="Enter Product Name">
            <input type="number" name="size" placeholder="Enter Size"><br><br>
            <button type="submit">Add Product</button>
            </form>`); // text/html
   
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
   
});

app.use('/', (req, res, next) => {
    // console.log('In the next middleware');
    res.send('<h1>Hello From Express JS!</h1>'); // text/html
   
});

app.listen(3000);