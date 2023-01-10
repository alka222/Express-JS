const express = require('express');
const app = express();
const fs = require('fs')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

app.post('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data = 'no chat exists';
        }
        res.send(`${data}<form action= "/" method ="POST" 
        onSubmit="document.getElementById("username").value =localStorage.getItem("username")">
        <input type = "text" name="message" id ="message">
        <input type="hidden" name = "username" id="username">
        <button type="submit">Send</button></form>`)

    })
  
})

app.get('/',(req,res,next)=>{
    console.log("in post username "+req.body.username)
    console.log("in post message "+req.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}:${req.body.message}`,{flag:"a"},(err)=>{
        err? console.log(err) : res.redirect("/")
    })
})
app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name="title"><button type="submit">Login</button></form>')
})

app.use('/end',(req,res,next)=>{
res.send('<h1>Thank You</h1>')
})

app.listen(3000);