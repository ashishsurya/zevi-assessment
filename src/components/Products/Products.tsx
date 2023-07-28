import { FC } from 'react';
import './Products.scss';
import { Product } from '../../utils/types';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductsProps {
  products: Product[];
}

export const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className='products__wrapper'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
