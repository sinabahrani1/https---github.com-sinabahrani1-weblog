const {Router} = require('express');
const {authenticate} = require('../middlewares/aut');
const router = new Router();

router.get("/dashbord" ,authenticate, (req,res)=>{
    res.render("dashbord" ,{
        pagetitle:"داشبورد کاربری ",
    })
})

module.exports = router; 