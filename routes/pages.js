const express = require('express');
const {loginpage,homepage , dashboard}= require('../controllers/pages.js');

const router= express.Router();


router.get("/login",loginpage);

router.get("/home",homepage);

router.get("/superadmin/dashboard",dashboard);

module.exports = router;