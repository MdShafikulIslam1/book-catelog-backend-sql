import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const signupUser = catchAsync(async (req, res) => {
  const result = await AuthService.signupUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The newly created user object.',
    data: result,
  });
});
const signinUser = catchAsync(async (req, res) => {
  const result = await AuthService.signinUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'successfully Login',
    data: result,
  });
});

export const AuthController = {
  signupUser,
  signinUser,
};
