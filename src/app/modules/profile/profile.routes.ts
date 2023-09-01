import express from 'express';
import { ProfileController } from './profile.controller';
import Auth from '../../middlewares/Auth';
import { ENUM_USER_ROLE } from '../../../enum/user';
const router = express.Router();
router.get(
  '/',
  Auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  ProfileController.getSingleProfile
);
export const ProfileRoutes = router;
