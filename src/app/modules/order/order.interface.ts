import { OrderStatus } from '@prisma/client';

export type IOrder = {
  status?: OrderStatus;
  orderedBooks: {
    bookId: string;
    quantity: number;
  }[];
};
