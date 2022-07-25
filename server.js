const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./lib/passport');
const viewRoute = require ("./Controllers/display");
const loginController = require ("./Controllers/controller-login");
const editController = require ("./Controllers/controller-edit-player");
const apiRoutes = require ("./Controllers/controller-api");
const app = express();
const PORT = 8080;

// next pertanyaan ini buat dimana?
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'Toyger_Rapha',
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.use ('',viewRoute,loginController,editController);
app.use ('/api/v1',apiRoutes)

// backup
// app.use ('',viewRoute);
// app.use ('',loginController);
// app.use ('',editController);

app.listen (PORT, () => {
    console.log("server on 8080");
});
