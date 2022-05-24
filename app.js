const  path = require('path');

const express = require('express');
const flash = require('connect-flash');
const sesion = require('express-session');

const bodyParser = require('body-parser');
const pasport = require('passport');
const conectDB = require('./config/database');
const indexRoutes = require("./routes/index");
const loginRoute = require('./routes/login');
const regesterRoute = require('./routes/regester');
const dashbordRoute = require('./routes/dashbord');

  
conectDB();
const app = express();

//* passport
require('./pasport');

//*body - parser
app.use(bodyParser.urlencoded({ extended: false }))

 
//* View Engine
app.set("view engine", "ejs");
app.set("views", "views");

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//*ssesion 
app.use(sesion({
    secret :"secret",
    cookie : {maxAge : 60000},
    resave:false,
    saveUninitialized :false,
}))
app.use(pasport.initialize())
app.use(pasport.session())

//*flashe 
app.use(flash())


//* Routes 
app.use(indexRoutes);
app.use(loginRoute);
app.use(dashbordRoute);
app.use(regesterRoute);



//* خطای 404 
app.use((req , res)=>{
  res.render("404")
})

//! port
const PORT = 3000


app.listen( PORT,()=>{
  console.log(`Server runing on port =  ${PORT}`)
})