import express from 'express';
import Assignment from '../models/assignmentModel.js';
import User from '../models/userModel.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route for users to upload an assignment
router.post('/upload', verifyToken, async (req, res) => {
  const { task, admin } = req.body;
  const userId = req.user.id;

  try {
    // Find the admin if they exist
    const adminUser = await User.findOne({ username: admin, role: 'admin' });
    if (!adminUser) {
      return res.status(400).json({ message: 'Admin not found' });
    }

    // Create a new assignment
    const newAssignment = new Assignment({
      userId,
      task,
      admin: adminUser._id,
      createdAt: new Date(),
    });

    await newAssignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully', assignment: newAssignment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route for admins to view assignments tagged to them
router.get('/assignments', verifyToken, verifyAdmin, async (req, res) => {
  const adminUsername = req.user.username; // Assuming req.user is populated by verifyToken middleware

  try {
    const assignments = await Assignment.find({ admin: adminUsername });
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route for admins to accept an assignment
router.post('/assignments/:id/accept', verifyToken, verifyAdmin, async (req, res) => {
  const assignmentId = req.params.id;

  try {
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.status = 'accepted';
    await assignment.save();
    res.status(200).json({ message: 'Assignment accepted', assignment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route for admins to reject an assignment
router.post('/assignments/:id/reject', verifyToken, verifyAdmin, async (req, res) => {
  const assignmentId = req.params.id;

  try {
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.status = 'rejected';
    await assignment.save();
    res.status(200).json({ message: 'Assignment rejected', assignment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
