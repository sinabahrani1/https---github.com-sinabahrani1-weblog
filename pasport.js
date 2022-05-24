const pasport = require('passport');
const {Strategy} = require('passport-local');
const bcript = require('bcryptjs');
const User = require('./modell/weblog');

pasport.use(new Strategy({usernameField:"email"} , async (email , password , done)=>{
    try {
        const user = await User.findOne({email})
        if (!user) {
            return done (null , false , {mesege :"کاربری با این ایمیل یافت نشد "})
        }
        const isMatch = await bcript.compare(password , user.password)
        if (isMatch) {
            return done(null , user)
        }
        else{
            return done(null , false , {mesege :"یا ایمیل یا پسورد اشتباه است "})
        }
    } catch (err) {
        console.log(err)
    }
}))
pasport.serializeUser((user , done)=>{
    done(null , user)
})

pasport.deserializeUser((id , done )=>{
    User.findById(id , (err , user )=>{
        done(err , user)
    })
})

