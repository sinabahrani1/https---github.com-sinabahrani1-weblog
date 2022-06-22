const {Router} = require('express');
const {authenticate} = require('../middlewares/aut');
const router = new Router();

router.get("/dashbord" ,authenticate, (req,res)=>{
    res.render("dashbord" ,{
        pagetitle:"داشبورد کاربری ",
        fullname : req.user.fullname,
        email : req.user.email
    })
})

router.get("/dashbord/add-post",(req , res)=>{
    res.render("abbpost",{
        titl:"ایجاد پست "
    })
})

module.exports = router; 