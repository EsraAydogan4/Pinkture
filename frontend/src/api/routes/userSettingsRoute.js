import express from "express";
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.route('/pages/userSettings').post(userController.getUserSettings);
router.route('/pages/userSettings').put(userController.updateUserSettings);

export default router;
