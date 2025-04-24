const express = require('express');
const app=express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');


app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , 'public')));


app.get("/" , function (req , res){
    res.render('index');
})

app.get("/ai" , function(req , res){
    res.render('ai');
})



app.listen(2005);