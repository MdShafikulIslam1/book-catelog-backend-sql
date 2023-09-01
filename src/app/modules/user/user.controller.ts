import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const signupUser = catchAsync(async (req, res) => {
  const result = await UserService.signupUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The newly created user object.',
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserService.getAllUser();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve all User data',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserService.getSingleUser(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve Single User data',
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  const result = await UserService.updateUser(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Update Single User data',
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const result = await UserService.deleteUser(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete Single User data',
    data: result,
  });
});

export const UserController = {
  signupUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
