
// pre-defined modules
const express = require('express');
const ejs = require('ejs');
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const mongosession = require('connect-mongodb-session')(session);
const methodOverride = require('method-override');




// user-defined imports
const connect = require('./db/dbconnection')
const test = require('./routers/test') 
const login = require('./routers/login')
const homepage = require('./routers/homepage')
const sellfood = require('./routers/sellfood');
const buyfood = require('./routers/buyfood');
const donatefood = require('./routers/donatefood');
const decomposefood = require('./routers/decomposefood');
const contact = require('./routers/contact');


//dotenv config
dotenv.config()




//dotenv variables
const path = process.env.PORT  
const dburl = process.env.DBPATH



const app = express()



//dbconnect
connect(dburl);


//template engine set up
app.set('view engine', 'ejs');
app.set('views', 'views');


//static files declaratipn
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//login cookie based authuntication implementation
const store = new mongosession(
    {
        uri: dburl,
        collection: "mysession"
    }
)
app.use(session({
    key: "thisiskey",
    secret: "THISISSECRET",
    saveUninitialized: false,
    resave: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24
    },
    store: store
}))
const isAuth = (req, res, next) => {
  if (req.session && req.session.isAuth) {
    res.redirect('/dashboard');
  } else {
    if (req.url !== '/login') {
      res.redirect('/login');
    } else {
      next();
    }
  }
};

app.get('/', (req, res) => {
  res.redirect('/login');
});


app.use("/",login)
app.use("/homepage",homepage)
app.use("/sellfood",sellfood)
app.use("/buyfood",buyfood)
app.use("/donatefood",donatefood)
app.use("/decomposefood",decomposefood)
app.use("/contact",contact)




app.listen(path,(err)=>{
    console.log("server listening at",path)
})


module.exports = { isAuth }