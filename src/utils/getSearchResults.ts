import { faker } from '@faker-js/faker';
import { Product } from './types';

const brands = ['H&M', 'Mango'];
const rating = [1, 2, 3, 4, 5];
const prices = [499, 599, 699, 799];

export const getSearchResults = () => {
  const products = [];
  for (let i = 1; i < 50; i++) {
    products.push({
      id: faker.string.uuid(),
      rating: faker.helpers.arrayElement(rating),
      price: faker.helpers.arrayElement(prices),
      brand: faker.helpers.arrayElement(brands),
      img: faker.image.urlLoremFlickr({ category: 'clothing' }),
    });
  }

  return products as Product[];
};
