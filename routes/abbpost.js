const {Router} = require('express');
const contriler = require('../middlewares/aut');
const router = new Router();


router.get("/add-post",(req , res)=>{
    res.render("abbpost",{
        titl:"ایجاد پست ",
        fullname:req.user.fullname,
    })
})

router.post("/add-post" ,contriler.createpost)

module.exports = router; 