import {Router} from 'express';

const router = Router();

import { createTask, getTasks, updateTask, deleteTask, getOneTask} from "../controllers/tasks";

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
