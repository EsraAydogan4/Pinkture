const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

router.route('/pages/login').post(loginController.girisyap);
router.route('/pages/register').post(registerController.kayitol);

module.exports=router;