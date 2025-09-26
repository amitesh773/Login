const express = require('express');
const router = express.Router();
const {registreUser,loginUser}= require('../controller/authController')

router.post('/register',registreUser)

router.post('/login',loginUser)

module.exports = router;
