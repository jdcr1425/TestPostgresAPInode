import express, { json } from 'express';
const app = express(); //importing routes

import projectRoutes from './routes/projects';
import tasksRoutes from './routes/projects'; //

app.use(morgan('dev'));
app.use(json()); //Routes

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', tasksRoutes);
export default app;