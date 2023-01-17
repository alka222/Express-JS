const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
 
const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const contactRoutes = require('./routes/contact-us');

const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/contact-us', contactRoutes);
app.use('/success', successRoutes);

app.get('/',(req, res, next) => {
    res.send('<h1>Hello from Express JS!</h1>')
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);