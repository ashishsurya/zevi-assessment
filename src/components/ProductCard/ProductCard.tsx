import { ElementRef, FC, useRef } from 'react';
import './ProductCard.scss';
import { Product } from '../../utils/types';
import { Rating } from '@smastrom/react-rating';
import { useHover } from 'react-haiku';
import { AnimatePresence, motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { ref: productRef, hovered } = useHover<ElementRef<'div'>>();
  const discountPrice = product.price - 200;
  return (
    <div className='product' ref={productRef}>
      <div className='product__image'>
        <img src={product.img} alt='product-title' />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>View product</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
