import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();
//TODO:Role based routing system
//All route are protected by ADMIN
router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getSingleUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
export const UserRoutes = router;
