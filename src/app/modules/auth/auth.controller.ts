import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';
import { NextFunction, Request, Response } from 'express';

const signupUser = catchAsync(async (req, res) => {
  const result = await AuthService.signupUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The newly created user object.',
    data: result,
  });
});
const signinUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.signinUser(req.body);
    res.json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User signin successfully!',
      token: result?.token,
    });
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  signupUser,
  signinUser,
};
