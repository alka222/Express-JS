const path = require('path');
const rootDir = require('../util/path');

exports.getSuccess = (req, res, next) =>{
    // console.log(req.method);
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
}

exports.postSuccess = (req, res, next) =>{
    // res.sendFile(path.join(rootDir, 'views', 'success.html'))
    res.redirect('/success/success');
}