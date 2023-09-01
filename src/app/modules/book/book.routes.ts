import express from 'express';
import { BookController } from './book.controller';
const router = express.Router();
//TODO:Role based routing system
//create-Book route,update route,delete route are protected by ADMIN

router.post('/create-book', BookController.create);
router.get('/', BookController.getAllBook);
router.get('/:id', BookController.getSingleBook);
router.get('/:categoryId/category', BookController.getBookByCategoryId);
router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);
export const BookRoutes = router;
