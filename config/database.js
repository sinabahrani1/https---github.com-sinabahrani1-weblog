const mongoose = require('mongoose');

const conectDB = async () =>{
    try {
         const con  = await mongoose.connect('mongodb://localhost:27017/weblogg' , {
             useNewUrlParser: true,
             useUnifiedTopology:true,
             useFindAndModify:true,
             useCreateIndex:true,
         })
         console.log(`conect database ${con.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports = conectDB