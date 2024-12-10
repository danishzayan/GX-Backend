import Assignment from '../models/assignmentModel.js';
import User from '../models/userModel.js';

// Function to upload a new assignment
export const uploadAssignment = async (req, res) => {
  const { task, admin } = req.body;
  const userId = req.user.id;

  try {
    const adminUser = await User.findOne({ username: admin, role: 'admin' });
    if (!adminUser) {
      return res.status(400).json({ message: 'Admin not found' });
    }

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
};

// Function to view all assignments for an admin
export const viewAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user.id });
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to accept assignment by admin
export const acceptAssignment = async (req, res) => {
  const assignmentId = req.params.id;

  try {
    const assignment = await Assignment.findById(assignmentId)
                                    .populate('admin', 'username')
                                    .populate('userId', 'username');

    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    if (assignment.admin._id.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to modify this assignment' });
    }

    assignment.status = 'accepted';
    await assignment.save();
    res.status(200).json({ 
      message: 'Assignment accepted', 
      assignment 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Function to reject assignment by admin
export const rejectAssignment = async (req, res) => {
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
};