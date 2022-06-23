const {Router} = require('express');
const {authenticate} = require('../middlewares/aut');
const blog = require('../modell/blog');
const {formatdate} =require('../utils/jalali');
const router = new Router();

router.get("/dashbord" ,authenticate,  async(req,res)=>{
  try {
    const Blog = await blog.find({user : req.user.id})

    res.render("dashbord" ,{
        pagetitle:"داشبورد کاربری ",
        fullname : req.user.fullname,
        email : req.user.email,
        Blog,
        formatdate
    })

  } catch (err) {
    consoole.log(err)
  }
  

})

module.exports = router; 