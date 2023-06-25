const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

router.route('/login').post(loginController.girisyap);
router.route('/register').post(registerController.kayitol);

module.exports=router;