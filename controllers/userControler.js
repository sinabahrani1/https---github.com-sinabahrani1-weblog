const passport = require("passport")
const bcript = require('bcryptjs');
const User = require('../modell/weblog');

exports.Handellogin = (req , res , next) =>{
    passport.authenticate("local" ,{
        successRedirect:"/dashbord",
        failureRedirect:"/login",
        failureFlash:"کاربر گرامی ایمیل یا کلمه عبور اشتباه است ",
    })(req , res , next)
}