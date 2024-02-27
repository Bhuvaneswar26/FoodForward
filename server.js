// pre-defined modules
const express = require("express");
const ejs = require("ejs");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const mongosession = require("connect-mongodb-session")(session);
const methodOverride = require("method-override");
const pathh = require("path");

// user-defined imports
const connect = require("./db/dbconnection");
const login = require("./routers/login");
const homepage = require("./routers/homepage");
const sellfood = require("./routers/sellfood");
const buyfood = require("./routers/buyfood");
const donatefood = require("./routers/donatefood");
const decomposefood = require("./routers/decomposefood");
const contact = require("./routers/contact");
const seller = require("./routers/seller");
const buyer = require("./routers/buyer");
const sellerdashboard = require("./routers/sellerdashboard");
const updateproduct = require("./routers/updateproduct");
const updateproduct2 = require("./routers/updateproduct2");
const updateproduct3 = require("./routers/updateproduct3");
const updateproduct4 = require("./routers/updateproduct4");
const deleteproduct = require("./routers/deleteproduct");
const donatesmall = require("./routers/donatesmall");
const donateessentials = require("./routers/donateessentials");
const accessmeals = require("./routers/accessmeals");
const profile = require("./routers/profile");

//dotenv config
dotenv.config();

//dotenv variables
const path = process.env.PORT;
const dburl = process.env.DBPATH;

const app = express();

//dbconnect
connect(dburl);

//template engine set  up
app.set("view engine", "ejs");
app.set("views", "views");

app.use(cookieparser());

//static files declaration
app.use(express.static("public"));
app.use("/uploads", express.static(pathh.join(__dirname, "uploads")));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//login cookie based authuntication implementation
const store = new mongosession({
  uri: dburl,
  collection: "mysession",
});
app.use(
  session({
    key: "thisiskey",
    secret: "THISISSECRET",
    saveUninitialized: false,
    resave: false,
    cookie: {
      expires: 1000 * 60 * 60 * 24,
    },
    store: store,
  })
);
const isAuth = (req, res, next) => {
  if (req.session && req.session.isAuth) {
    next();
  } else {
    if (req.url !== "/login") {
      res.redirect("/login");
    } else {
      next();
    }
  }
};

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.use("/", login);
app.use("/homepage", isAuth, homepage);
app.use("/sellfood", isAuth, sellfood);
app.use("/buyfood", isAuth, buyfood);
app.use("/donatefood", isAuth, donatefood);
app.use("/decomposefood", isAuth, decomposefood);
app.use("/contact", isAuth, contact);
app.use("/seller", isAuth, seller);
app.use("/buyer", isAuth, buyer);
app.use("/sellerdashboard", isAuth, sellerdashboard);
app.use("/updateproduct", isAuth, updateproduct);
app.use("/updateproduct2", isAuth, updateproduct2);
app.use("/updateproduct3", isAuth, updateproduct3);
app.use("/updateproduct4", isAuth, updateproduct4);
app.use("/deleteproduct", isAuth, deleteproduct);
app.use("/donatesmall", isAuth, donatesmall);
app.use("/donateessentials", isAuth, donateessentials);
app.use("/accessmeals", accessmeals);
app.use("/profile", profile);

app.listen(path, (err) => {
  console.log("server listening at", path);
});

module.exports = { isAuth };
