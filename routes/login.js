const express = require('express');
const {login}= require("../controllers/login.js");


const router = express.Router();

router.post("/superadmin/login",login);

module.exports = router;