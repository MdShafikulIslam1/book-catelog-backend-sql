import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
const signupUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};
const getAllUser = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};
const getSingleUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const deleteUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UserService = {
  signupUser,
  getAllUser,
  getSingleUser,
  deleteUser,
};
