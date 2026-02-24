const express = require('express');
const path = require('path');
const engine = require('ejs-mate');

const homeroutes = require('./routes/pageRoutes');
const loginroutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "../views"));
app.set("layout", "layouts/boilerplate.ejs");

app.use("/api", homeroutes);
app.use("/api", loginroutes);

module.exports = app;
