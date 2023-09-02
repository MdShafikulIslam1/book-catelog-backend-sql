"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSearchableFields = exports.bookFilterableRelationalFieldsMapper = exports.bookFilterableRelationalFields = exports.bookFilterableFields = void 0;
exports.bookFilterableFields = [
    'search',
    'minPrice',
    'maxPrice',
    'categoryId',
];
exports.bookFilterableRelationalFields = ['categoryId'];
exports.bookFilterableRelationalFieldsMapper = {
    categoryId: 'category',
};
exports.bookSearchableFields = ['title', 'author', 'genre'];
