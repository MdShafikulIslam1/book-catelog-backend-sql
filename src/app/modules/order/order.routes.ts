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
router.get(
  '/',
  Auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
  OrderController.getAllOrder
);
router.get(
  '/:orderId',
  Auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
  OrderController.getSingleOrder
);
export const OrderRoutes = router;
