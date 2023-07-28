import { FC } from 'react';
import './ProductCard.scss';
import { Product } from '../../utils/types';
import { Rating } from '@smastrom/react-rating';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const discountPrice = product.price - 200;
  return (
    <div className='product'>
      
      <img src={product.img} alt='product-title' className='product__image' />
      <h4 className='product__name'>{product.name}</h4>
      <p className='product__price'>
        <span className='product__price__actual'>Rs. {product.price}</span>{' '}
        <span className='product__price__discount'>Rs. {discountPrice}</span>
      </p>
      <div className='product__rating'>
        <Rating value={product.rating} readOnly style={{ maxWidth: 100 }} />
        <p>({product.numberOfReviews})</p>
      </div>
    </div>
  );
};
