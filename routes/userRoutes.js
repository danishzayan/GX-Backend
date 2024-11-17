import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import { validateUser } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/register', validateUser, registerUser);
router.post('/login', validateUser, loginUser);

export default router;
