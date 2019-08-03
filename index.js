var express = require("express");
var app     =express();
const port  = 3000;

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.render('index.html');
})

app.listen(3000,()=>{
    console.log(`Server Running at $port`)
});