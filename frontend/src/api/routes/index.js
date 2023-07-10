const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

router.route('/pages/login').post(loginController.girisyap);
router.route('/pages/register').post(registerController.kayitol);
router.route('/pages/userPage').get(userController.userPage);
router.route('/pages/userSettings').put(userController.userSettings);
router.route('/pages/pano').get(panoController.pano);

module.exports=router;