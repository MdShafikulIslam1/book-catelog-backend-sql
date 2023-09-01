import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getSingleProfile = async (userId: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return result;
};

export const ProfileService = {
  getSingleProfile,
};
