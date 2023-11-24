import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/user.router';
const app: Application = express();

// perser
app.use(express.json());
app.use(cors());

// all application router
app.use('/api/users', UserRoutes);
app.use('/api/users', UserRoutes);
// app.use('/api/users/:userId');

app.get('/', (req: Request, res: Response) => {
  res.send('server running');
});

export default app;
