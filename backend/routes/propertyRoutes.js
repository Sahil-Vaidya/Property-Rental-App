import express from 'express';
import { addProperty, getAllProperties } from '../controllers/propertyController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', protect, addProperty);
router.get('/', getAllProperties);

export default router;