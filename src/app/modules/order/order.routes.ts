import express from 'express';
import { OrderController } from './order.controller';
import Auth from '../../middlewares/Auth';
import { ENUM_USER_ROLE } from '../../../enum/user';
const router = express.Router();
router.post(
  '/create-order',
  Auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.createOrder
);
// router.get('/', OrderController.getAllOrder);
router.get(
  '/',
  Auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
  OrderController.getAllOrder
);
export const OrderRoutes = router;
