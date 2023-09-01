import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';
const createOrder = catchAsync(async (req, res) => {
  const result = await OrderService.createOrder(req.user?.userId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order created Successfully',
    data: result,
  });
});
const getAllOrder = catchAsync(async (req, res) => {
  const result = await OrderService.getAllOrder();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All order retrieve  Successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrder,
};
