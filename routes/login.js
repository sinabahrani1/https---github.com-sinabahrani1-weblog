const { Router } = require("express");
const pasport = require('passport');
const bcript = require('bcryptjs');

const usercontroler = require('../controllers/userControler');

const router =  Router();

router.get("/login",(req,res)=>{
    res.render("login",{
        pageTitle:"ورود به داشبورد",
        error : req.flash("msg"),
        error : req.flash("error"),
    }) 
});

router.post("/login" , usercontroler.Handellogin)



module.exports = router;
