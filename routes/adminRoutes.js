import express from 'express';
import { getAllAdmins } from '../controllers/adminController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getAllAdmins);

export default router;