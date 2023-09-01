import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();
router.post('/auth/signup', UserController.signupUser);
//TODO:Role based routing system
router.get('/users', UserController.getAllUser);
router.get('/users/:id', UserController.getSingleUser);
router.delete('/users/:id', UserController.deleteUser);
export const UserRoutes = router;
