import express from 'express';
import { CategoryController } from './category.controller';
const router = express.Router();
//TODO:Role based routing system
//create-category route,update route,delete route are protected by ADMIN
router.post('/create-category', CategoryController.create);
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getSingleCategory);
router.patch('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);
export const CategoryRoutes = router;
