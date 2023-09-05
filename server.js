
// pre-defined modules
const express = require('express');
const ejs = require('ejs');
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const mongosession = require('connect-mongodb-session')(session);
const methodOverride = require('method-override');
const pathh = require('path');





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
const adress = require("./routers/adress")
const seller = require('./routers/seller')
const buyer = require('./routers/buyer')
const sellerdashboard = require('./routers/sellerdashboard')
const updateproduct =  require('./routers/updateproduct')
const deleteproduct = require('./routers/deleteproduct')


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


app.use(cookieparser())

//static files declaratipn
app.use(express.static('public'))
app.use('/uploads', express.static(pathh.join(__dirname, 'uploads')))
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyparser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyparser.json());




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
app.use("/adress",adress)
app.use('/seller',seller)
app.use('/buyer',buyer)
app.use('/sellerdashboard',sellerdashboard)
app.use('/updateproduct',updateproduct)
app.use('/deleteproduct',deleteproduct)




app.listen(path,(err)=>{
    console.log("server listening at",path)
})


module.exports = { isAuth }