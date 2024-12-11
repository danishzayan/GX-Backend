import express from 'express';
import { registerUser, loginUser, requestPasswordReset, resetPassword } from '../controllers/userController.js';
import { validateUser } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/register', validateUser, registerUser);
router.post('/login', validateUser, loginUser);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

export default router;
