"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const book_constant_1 = require("./book.constant");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data,
        include: {
            category: true,
        },
    });
    return result;
});
//TODO:filtering
const getAllBook = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = filters, filtersData = __rest(filters, ["search"]);
    const { page, limit, sortBy, sortOrder, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
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
            OR: book_constant_1.bookSearchableFields.map(filed => ({
                [filed]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    //filtering
    // if (Object.keys(filtersData).length > 0) {
    //   andCondition.push({
    //     AND: Object.keys(filtersData).map(key => {
    //       if (bookFilterableRelationalFields.includes(key)) {
    //         return {
    //           [bookFilterableRelationalFieldsMapper[key]]: {
    //             id: (filtersData as any)[key],
    //           },
    //         };
    //       } else if (key === 'maxPrice' || key === 'maxPrice') {
    //         return {
    //           minPrice: {
    //             lte: filtersData.minPrice,
    //           },
    //           maxPrice: {
    //             gte: filtersData.maxPrice,
    //           },
    //         };
    //       } else {
    //         return {
    //           [key]: {
    //             equals: (filtersData as any)[key],
    //           },
    //         };
    //       }
    //     }),
    //   });
    // }
    // Remove the declaration of whereCondition as an array
    const whereCondition = {};
    // ... your other code ...
    if (Object.keys(filtersData).length > 0) {
        andCondition.push({
            AND: Object.keys(filtersData).map(key => {
                if (book_constant_1.bookFilterableRelationalFields.includes(key)) {
                    return {
                        [book_constant_1.bookFilterableRelationalFieldsMapper[key]]: {
                            id: filtersData[key],
                        },
                    };
                }
                else if (key === 'minPrice') {
                    return {
                        minPrice: {
                            lte: filtersData.minPrice,
                        },
                    };
                }
                else if (key === 'maxPrice') {
                    return {
                        maxPrice: {
                            gte: filtersData.maxPrice,
                        },
                    };
                }
                else {
                    return {
                        [key]: {
                            equals: filtersData[key],
                        },
                    };
                }
            }),
        });
    }
    // const whereCondition: Prisma.BookWhereInput[] =
    //   andCondition.length > 0 ? { AND: andCondition } : {};
    const result = yield prisma_1.default.book.findMany({
        where: whereCondition,
        orderBy,
        skip,
        take: limit,
    });
    const total = yield prisma_1.default.book.count({ where: whereCondition });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return result;
});
const getBookByCategoryId = (id, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, skip, limit } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    const result = yield prisma_1.default.book.findMany({
        where: {
            categoryId: id,
        },
        skip,
        take: limit,
    });
    const total = yield prisma_1.default.book.count({
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
});
exports.BookService = {
    create,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
    getBookByCategoryId,
};
