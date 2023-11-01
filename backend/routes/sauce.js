/************************************************************/
/***************** Routes sauce  ****************************/
/************************************************************/

const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce')

// route Post création sauce
router.post('/',auth,multer,sauceCtrl.createSauce);
// route Get récupération de toutes les sauces 
router.get('/',auth,sauceCtrl.getAllSauces);
// route Get récupération d'une sauce 
router.get('/:id',auth,sauceCtrl.getOneSauce);

module.exports = router;