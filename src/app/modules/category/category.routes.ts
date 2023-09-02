import express from 'express';
import { CategoryController } from './category.controller';
import Auth from '../../middlewares/Auth';
import { ENUM_USER_ROLE } from '../../../enum/user';
const router = express.Router();
//TODO:Role based routing system
//create-category route,update route,delete route are protected by ADMIN
router.post(
  '/create-category',
  Auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.create
);
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getSingleCategory);
router.patch(
  '/:id',
  Auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.updateCategory
);
router.delete(
  '/:id',
  Auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory
);
export const CategoryRoutes = router;
