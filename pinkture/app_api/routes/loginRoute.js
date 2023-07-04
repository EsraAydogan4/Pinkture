import express from "express";
import * as loginController from '../controllers/loginController.js';

const router = express.Router();

router.route('/pages/login').post(loginController.girisyap);

export default router;
