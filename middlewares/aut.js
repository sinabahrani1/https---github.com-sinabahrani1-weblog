exports.authenticate = (req , res , next) =>{
        if (req.isAuthenticated() ) {
            return next()
        }
         res.redirect("/404")
}
const blog = require('../modell/blog');

exports.createpost = async(req , res)=>{
    try {
        console.log("miyoooo")
        res.redirect("/dashbord")
    } catch (err) {
        console.log(err)
    }
}