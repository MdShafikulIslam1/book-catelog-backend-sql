import express from 'express';
import { AuthController } from './auth.controller';
const router = express.Router();

router.post('/signup', AuthController.signupUser);
router.post('/signin', AuthController.signinUser);

export const AuthRoutes = router;
