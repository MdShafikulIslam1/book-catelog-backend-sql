export const bookFilterableFields = [
  'search',
  'minPrice',
  'maxPrice',
  'categoryId',
];
export const bookFilterableRelationalFields = ['categoryId'];
export const bookFilterableRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
export const bookSearchableFields = ['title', 'author', 'genre'];
