import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookService } from './book.service';
import pick from '../../../shared/pick';
import { bookFilterableFields } from './book.constant';
import { paginationOptionFields } from '../../../common/paginationOptions';

const create = catchAsync(async (req, res) => {
  const result = await BookService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The newly created Book object.',
    data: result,
  });
});
const getAllBook = catchAsync(async (req, res) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationOptionFields);
  const result = await BookService.getAllBook(filters, paginationOptions);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve all Book data',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBook = catchAsync(async (req, res) => {
  const result = await BookService.getSingleBook(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve Single Book data',
    data: result,
  });
});
const updateBook = catchAsync(async (req, res) => {
  const result = await BookService.updateBook(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Update Book data',
    data: result,
  });
});
const deleteBook = catchAsync(async (req, res) => {
  const result = await BookService.deleteBook(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete Single Book data',
    data: result,
  });
});

const getBookByCategoryId = catchAsync(async (req, res) => {
  const paginationOptions = pick(req.query, paginationOptionFields);
  const result = await BookService.getBookByCategoryId(
    req.params.categoryId,
    paginationOptions
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Delete Single Book data',
    data: result,
  });
});
export const BookController = {
  create,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBookByCategoryId,
};
