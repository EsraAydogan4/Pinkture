import express from "express";
import * as registerController from '../controllers/registerController.js';

const router = express.Router();

router.route('/pages/register').post(registerController.kayitol);

export default router;
