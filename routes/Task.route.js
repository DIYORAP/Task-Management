import express from 'express';
import { createTask, deleteTask, getAlltask, taskcomplete, updateTask } from '../controller/Task.controller.js';

const router =express.Router();

router.post('/task',createTask);
router.get('/tasks',getAlltask);
router.patch('/tasks/:id',updateTask);
router.delete('/tasks/:id',deleteTask);
router.patch('/tasks/:id/complete',taskcomplete);

export default router;