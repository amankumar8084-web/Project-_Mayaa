const express = require('express');
const { login } = require("../controllers/authController.js");


const router = express.Router();

router.post("/superadmin/login", login);

module.exports = router;