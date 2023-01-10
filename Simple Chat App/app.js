const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) =>{

    fs.readFile('username.txt', (err, data) =>{
        if(err){
            console.log(err);
            data = 'No chat exists';
        }

        res.send(
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
            <input type="text" id="message" name="message", placeholder="message">
            <input type="hidden" id="username" name="username"><br>
            <button type="submit">Send</button></form>`);
            
    })
})

app.post('/', (req, res) =>{

    if(req.body.message === undefined){
        res.redirect('/');
    }

    else{
        console.log(req.body.username);
        console.log(req.body.message);
        fs.writeFile('username.txt', ` ${req.body.username} : ${req.body.message} `, {flag: 'a'}, (err) =>{
            err ? console.log(err) : res.redirect('/');
        })

    }
    
    
})

app.get('/login',(req, res) =>{
    res.send(`<form action="/" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input type="text" id="username" name="username", placeholder="username"><br>
    <button type="submit">Login</button></form>`)
})

app.listen(3000);