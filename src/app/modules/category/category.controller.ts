import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const create = catchAsync(async (req, res) => {
  const result = await CategoryService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The newly created Category object.',
    data: result,
  });
});
const getAllCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategory();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve all Category data',
    data: result,
  });
});
const getSingleCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getSingleCategory(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve Single Category data',
    data: result,
  });
});
const updateCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.updateCategory(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Update Category data',
    data: result,
  });
});
const deleteCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.deleteCategory(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete Single Category data',
    data: result,
  });
});

export const CategoryController = {
  create,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
