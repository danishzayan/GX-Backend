import express from 'express';
import User from '../models/userModel.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all admins
router.get('/', verifyToken, async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' })
      .select('username role createdAt')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      message: 'Admins fetched successfully',
      count: admins.length,
      admins
    });
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;