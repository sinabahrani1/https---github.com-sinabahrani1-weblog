const passport = require("passport")
const bcript   = require('bcryptjs');
const bodyParser = require('body-parser');
const User     = require('../modell/weblog');
const fetch = require('node-fetch');


exports.Handellogin =  (req , res , next) =>{

    if(!req.body["g-recaptcha-response"]){
        req.flash("error","من ربات نیستم را فعال کنید")
        return res.redirect("/login")
    }

    passport.authenticate("local" ,{
        // successRedirect:"/dashbord",
         failureRedirect:"/login", 
         failureFlash:"کاربر گرامی ایمیل یا کلمه عبور اشتباه است ",
     })(req , res , next)
    
    
};


exports.rememberme = (req , res ) =>{
    if (req.body.remember) {
        req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000
    }
    else{
        req.session.cookie.expire = null
    }
    res.redirect("/dashbord")
}

exports.logout = (req , res )=>{
    req.logout()
    req.flash("error" , "خروج موفقیت امیز بود ")
    res.redirect("/login")
}