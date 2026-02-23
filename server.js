const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const engine = require('ejs-mate');
const connectDB = require('./config/db');

const homeroutes= require('./routes/pages.js');
const loginroutes= require('./routes/login.js');


dotenv.config({path: path.join(__dirname, '.env')});
 connectDB();


const app = express();

app.use(express.json());
app.use(express.static('public'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/boilerplate.ejs"); 


app.use("/api",homeroutes);
app.use("/api",loginroutes);


app.listen(process.env.PORT, () =>{
    console.log(`server is running on port ${process.env.PORT}`);
})