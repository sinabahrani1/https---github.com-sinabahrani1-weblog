const mongoose = require('mongoose');
const yup = require('yup');

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true, 
    },
    password:{
        type:String,
        required:true, 
    },
    createAd:{
        type:Date,
        default : Date.now
    }
})

const scema = yup.object().shape({
    fullname: yup.string().required(" نام و نام کاربری الزامی میباشد").min(4,"نام و نام خانوادگی نمیتواند کمتر از 4 کارکتر باشد ").max(255),
    email: yup.string().email("ایمیل نا معتبر میباشد ").required("ایمیل الزامی میباشد"),
    password: yup.string().required("کلمه عبور الزامی میباشد ").min(4,"کلمه عبور نمیتواند کمتر از 4 کارکتر باشد").max(255,"کلمه عبور نمیتواند بیشتر از 255 کارکتر باشد "),
    cpassword : yup.string().required("تکرار کلمه عبور الزامی میباشد ").min(4,"تمرار کلمه عبور نمیتواند کمتر از 4 کارکتر باشد").max(255,"تکرار کلمه عبور نمیتواند بیشتر از 255 کارکتر باشد").oneOf([yup.ref("password"),null],"تکرار کلمه عبور با کلمه عبور یکسان نیست")
})

userSchema.statics.userV= function(body){
    return scema.validate(body,{abortEarly:false})
}


const User = mongoose.model("User" , userSchema)

module.exports = User