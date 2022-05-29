const {Router} = require('express');
const bcript = require('bcryptjs');
const user = require('../modell/weblog');

const router = new Router();




router.get("/regester" ,(req,res)=>{
    res.render("regester" ,{
        title:"صفحه ثبت نام ",
    })
})

router.post("/regester" ,async (req,res) =>{
const errors = []
        try {
            await user.userV(req.body)
            const {fullname , email , password} = req.body
            const uuser = await user.findOne({email})
            if(uuser){
                errors.push("کاربری با این ایمیل ثبت نام کرده است ")
                res.render("regester",{
                    title:"صفحه ثبت نام ",
                    errors
                })
            }
            const hash = await bcript.hash(password , 10)
            await user.create({fullname , email , password : hash})
            req.flash("error" , "ثبت نام موفقیت امیز بود ")
            res.redirect("/login")
        } catch (err) {
            console.log(err)
            res.render("regester",{
                title:"صفحه ثبت نام ",
                errors : err.errors
            })
        }
})
module.exports = router;