var express = require("express");
var app     =express();
const path = require('path');
const router = express.Router();
const port  = 8000;
const hostname = '127.0.0.1';

// app.set('view engine', 'ejs');

app.get("/hello",(req,res)=>{
    res.send('<h1>Hello</h1>');
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(port, '127.0.0.1', ()=>{

    console.log(`Server running at http://${hostname}:${port}/`);
  
  });