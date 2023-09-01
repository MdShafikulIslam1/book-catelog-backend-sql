import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { ISigninData } from './auth.interface';
import ApiError from '../../../error/ApiError';
import httpStatus from 'http-status';
import { JwtHelpers } from '../../../helpers/jwtHelpes';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

const signupUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const signinUser = async (
  signinData: ISigninData
): Promise<{ token: string } | null> => {
  const { email, password } = signinData;
  const isExistUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const isPasswordMatch = isExistUser?.password === password;
  if (!isExistUser || !isPasswordMatch) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Email or Password are invalid');
  }
  const token = JwtHelpers.createToken(
    { userId: isExistUser.id, role: isExistUser.role },
    config.secret as Secret,
    config.secret_expires_in as string
  );
  return { token };
};
export const AuthService = {
  signupUser,
  signinUser,
};
