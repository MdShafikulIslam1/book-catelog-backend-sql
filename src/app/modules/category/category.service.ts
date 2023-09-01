import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const create = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};
const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();
  return result;
};
const getSingleCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
  return result;
};
const updateCategory = async (
  id: string,
  data: Partial<Category>
): Promise<Category | null> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  create,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
