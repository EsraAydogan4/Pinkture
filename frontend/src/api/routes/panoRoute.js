import express from "express";
import * as panoController from '../controllers/panoController.js';

const router = express.Router();

router.route('/pages/pano').post(panoController.girisyap);

export default router;
