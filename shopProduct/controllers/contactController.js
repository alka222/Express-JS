const path = require('path');

const rootDir = require('../util/path')

exports.getContactUs = (req, res, next) =>{
    // console.log(req.method);
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
}

exports.postContactUs = (req, res, next) =>{
    // res.sendFile(path.join(rootDir, 'views', 'success.html'))
    // console.log(req.method);
    res.redirect('/success/success');
}