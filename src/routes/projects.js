import {Router} from 'express';
import { createProject,getProjects } from "../controllers/projects";

const router = Router();

// /api/projects/
router.post('/', createProject );
router.get('/', getProjects );





export default router;
