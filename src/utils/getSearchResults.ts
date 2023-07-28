import { faker } from '@faker-js/faker';
import { Product } from './types';

const brands = ['H&M', 'Mango'];
const rating = [1, 2, 3, 4, 5];
const prices = [499, 599, 699, 799];
const images = [
  'https://i.pinimg.com/564x/3f/c6/1f/3fc61f80df13c1fcd1ea15d02ae7e538.jpg',
  'https://i.pinimg.com/564x/02/2c/7a/022c7a6ddd651fd45fa46dff163b9a83.jpg',
  'https://i.pinimg.com/564x/aa/73/d7/aa73d7a57da549dd64201f8860f55b25.jpg',
  'https://i.pinimg.com/564x/22/59/79/225979d60ab5b087f216b33a48d8dff4.jpg',
];

export const getSearchResults = () => {
  const products: Product[] = [];
  for (let i = 1; i < 50; i++) {
    products.push({
      id: faker.string.uuid(),
      rating: faker.helpers.arrayElement(rating),
      price: faker.helpers.arrayElement(prices),
      brand: faker.helpers.arrayElement(brands),
      img: faker.helpers.arrayElement(images),
      name: faker.commerce.productName(),
      numberOfReviews: 210,
    });
  }

  return products;
};
