/************************************************************/
/***************** Routes user *****************************/
/************************************************************/
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const password = require('../middleware/password-validator');
// import sécurité 'express-rate-limit' 
const limiter = require('../middleware/limiter');

// inscription user routes //
router.post ('/signup', password, userCtrl.signup);
// connexion user routes //
router.post ('/login', limiter, userCtrl.login)

module.exports = router