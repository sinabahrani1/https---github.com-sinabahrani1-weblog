const { Router } = require("express");
const pasport = require('passport');
const bcript = require('bcryptjs');

const usercontroler = require('../controllers/userControler');
const {authenticate}  = require('../middlewares/aut');

const router =  Router();

router.get("/login",(req,res)=>{
    res.render("login",{
        pageTitle:"ورود به داشبورد",
        error : req.flash("msg"),
        error : req.flash("error"),
    }) 
});

router.post("/login" , usercontroler.Handellogin)

router.get("/logout" , authenticate,usercontroler.logout)


module.exports = router;
