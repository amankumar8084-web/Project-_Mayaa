const express = require('express');


exports.loginpage =(req, res) =>{
    res.render('pages/login.ejs', {user: null});
}


exports.homepage =  (req, res) =>{
    res.render('pages/home.ejs', {user: null});
}

exports.dashboard = (req,res)=>{
    res.render('pages/superadmin.ejs',{user:null});
}