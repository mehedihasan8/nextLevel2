import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.alluser);
router.get('/:userId', UserController.singleUser);

export const UserRoutes = router;
