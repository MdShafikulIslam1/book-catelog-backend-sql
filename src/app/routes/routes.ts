import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { BookRoutes } from '../modules/book/book.routes';
const router = express.Router();
const moduleRoutes = [
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
