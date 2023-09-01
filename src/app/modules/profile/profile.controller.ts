import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './profile.service';

const getSingleProfile = catchAsync(async (req, res) => {
  const result = await ProfileService.getSingleProfile(req?.user?.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve Single Profile data',
    data: result,
  });
});

export const ProfileController = {
  getSingleProfile,
};
