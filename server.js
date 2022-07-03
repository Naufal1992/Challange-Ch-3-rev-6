const express = require('express');
const app = express();
const PORT = 8080;

const viewRoute = require ("./View/index");

app.set("view engine", "ejs");
app.set('views', __dirname + '/view');

app.use ('/', viewRoute);

app.listen (PORT, () => {
    console.log("server on");
});
