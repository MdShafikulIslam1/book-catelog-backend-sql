/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from '../../../interfaces/paginationOptions';
import { IBookFilterableFields } from './book.interface';
import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { bookSearchableFields } from './book.constant';
import {
  IGenericResponse,
  IGenericResponseWithTotalPage,
} from '../../../interfaces/common';

const create = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

//TODO:filtering
const getAllBook = async (
  filters: IBookFilterableFields,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Book[] | null>> => {
  const { search, ...filtersData } = filters;

  const { page, limit, sortBy, sortOrder, skip } =
    paginationHelpers.calculatePagination(paginationOptions);
  //sorting
  let orderBy = {};
  if (sortBy && sortOrder) {
    orderBy = {
      [sortBy]: sortOrder,
    };
  }
  const andCondition = [];
  //searching
  if (search) {
    andCondition.push({
      OR: bookSearchableFields.map(filed => ({
        [filed]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }
  //filtering
  // if (Object.keys(filtersData).length > 0) {
  //   // andCondition.push({
  //   //   AND: Object.keys(filtersData).map(key => ({
  //   //     [key]: {
  //   //       equals: (filtersData as any)[key],
  //   //     },
  //   //   })),
  //   // });
  //   const filterKeys = Object.keys(filtersData) as (keyof typeof filtersData)[];
  //   filterKeys.forEach(key => {
  //     if (filtersData[key]) {
  //       const filter: Record<string, any> = {};
  //       filter[key] = { equals: filtersData[key] };
  //       andCondition.push(filter);
  //     }
  //   });
  // }
  if (Object.keys(filtersData).length > 0) {
    andCondition.push({
      AND: Object.keys(filtersData).map(key => ({
        [key]: {
          equals: (filtersData as any)[key],
        },
      })),
    });
  }
  const whereCondition: Prisma.BookWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};

  const result = await prisma.book.findMany({
    where: whereCondition,
    // orderBy,
    // skip,
    // take: limit,
  });
  const total = await prisma.book.count({ where: whereCondition });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book | null> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

const getBookByCategoryId = async (
  id: string,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponseWithTotalPage<Book[] | null>> => {
  const { page, skip, limit } =
    paginationHelpers.calculatePagination(paginationOptions);
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
    skip,
    take: limit,
  });
  const total = await prisma.book.count({
    where: {
      categoryId: id,
    },
  });
  const totalPage = Math.ceil(total / limit);
  return {
    meta: {
      page,
      limit,
      total,
      totalPage,
    },
    data: result,
  };
};
export const BookService = {
  create,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBookByCategoryId,
};
