import {Router} from 'express';

const router = Router();

import { createTask, getTasks, updateTask, deleteTask, getOneTask, getTaskByProject} from "../controllers/tasks";

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/project/:id', getTaskByProject);
export default router;
