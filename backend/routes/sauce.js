/************************************************************/
/***************** Routes sauce  ****************************/
/************************************************************/

const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce')

// route création sauce
router.post('/',auth,multer,sauceCtrl.createSauce);

module.exports = router;