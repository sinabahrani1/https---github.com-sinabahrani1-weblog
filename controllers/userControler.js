const passport = require("passport")
const bcript   = require('bcryptjs');
const User     = require('../modell/weblog');

exports.Handellogin = (req , res , next) =>{
        console.log(req.body["g-recaptcha-response"])

    if (!req.body["g-recaptcha-response"]) {
        req.flash(("error"),"شما من ربات نیستم رو فعال نکردین")
        return res.redirect("/login")
    }

    const secretky = process.env.CAPTCHA;
    const verifyurl = `https://google.com/recaptcha/api/siteverify?secret=${secretky}&response=${req.body["g-recaptcha-response"]}
    &remoteip=${req.connection.remoteAddress}`
    console.log(req.connection.remoteAddress)



    passport.authenticate("local" ,{
       // successRedirect:"/dashbord",
        failureRedirect:"/login", 
        failureFlash:"کاربر گرامی ایمیل یا کلمه عبور اشتباه است ",
    })(req , res , next)
}

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