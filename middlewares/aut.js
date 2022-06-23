exports.authenticate = (req , res , next) =>{
        if (req.isAuthenticated() ) {
            return next()
        }
         res.redirect("/404")
}
const blog = require('../modell/blog');

exports.createpost = async(req , res)=>{
    try {
        await blog.create({... req.body , user:req.user.id})
        
        res.redirect("/dashbord")
        console.log(req.body)
    } catch (err) {
        console.log(err)
    }
}