import express from 'express';
import { isAdminRoute, protectRoute } from '../middlewares/authMiddleware';
import { createTask, duplicateTask, postTaskActivity } from '../controllers/taskController';

const router = express.Router();
router.post("/create", protectRoute, isAdminRoute, createTask);
router.post("/duplicate/:id", protectRoute, isAdminRoute, duplicateTask);
router.post("/activity/:id", protectRoute, isAdminRoute, postTaskActivity);


export default router;