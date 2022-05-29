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

module.exports = router; 