const  path = require('path');
const mongoo = require('mongoose');
const express = require('express');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const pasport = require('passport');
const sesion = require('express-session');
const MongoStore = require('connect-mongo');


//! بین ماچول ها و روت ها

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
    resave:false,
    saveUninitialized :false,
    store: MongoStore.create({mongoUrl:'mongodb://localhost/session'})
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