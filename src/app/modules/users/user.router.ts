import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.alluser);
router.get('/:userId', UserController.singleUser);
router.put('/:userId', UserController.singleUserUpdate);
router.delete('/:userId', UserController.deleteSingelUser);
router.put('/:userId/orders', UserController.addToProduct);

export const UserRoutes = router;
