import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IOrder } from './order.interface';

const createOrder = async (userId: string, payload: IOrder): Promise<Order> => {
  const order = await prisma.order.create({
    data: {
      userId,
      orderedBooks: payload.orderedBooks,
    },
  });
  return order;
};

const getAllOrder = async () => {
  const result = await prisma.order.findMany({
    include: {
      user: true,
    },
  });
  return result;
};
export const OrderService = {
  createOrder,
  getAllOrder,
};
