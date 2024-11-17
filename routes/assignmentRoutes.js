import express from 'express';
import { uploadAssignment, viewAssignments, acceptAssignment, rejectAssignment } from '../controllers/assignmentController.js';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/upload', verifyToken, uploadAssignment);
router.get('/', verifyToken, verifyAdmin, viewAssignments);
router.post('/:id/accept', verifyToken, verifyAdmin, acceptAssignment);
router.post('/:id/reject', verifyToken, verifyAdmin, rejectAssignment);

export default router;
