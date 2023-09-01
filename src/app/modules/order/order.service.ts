import { Order, UserRole } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IOrder } from './order.interface';
import { JwtPayload } from 'jsonwebtoken';

const createOrder = async (userId: string, payload: IOrder): Promise<Order> => {
  const order = await prisma.order.create({
    data: {
      userId,
      orderedBooks: payload.orderedBooks,
    },
  });
  return order;
};

const getAllOrder = async (user: JwtPayload | null) => {
  if (user?.role === UserRole.customer) {
    const result = await prisma.order.findMany({
      where: {
        userId: user?.userId,
      },
    });
    return result;
  }
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
