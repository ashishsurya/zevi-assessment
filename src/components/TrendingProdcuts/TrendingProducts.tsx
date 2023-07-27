import { ElementRef, FC, useRef } from 'react';
import './TrendingProducts.scss';
import { motion } from 'framer-motion';
import { useClickOutside } from 'react-haiku';
import { useTrendsDialogStore } from '../../zustand/useTrendsDialog';
import { getTrendingProducts } from '../../utils/getTrendingProducts';
import { TrendingProductCard } from '../TrendingProductCard/TrendingProductCard';
import { getPopularSuggestions } from '../../utils/getPopularSuggestions';

interface TrendingProductsProps {}

export const TrendingProducts: FC<TrendingProductsProps> = ({}) => {
  const ref = useRef<ElementRef<'div'>>(null);
  const { closeDialog } = useTrendsDialogStore();


  // used to prevent the dialog from closing when clicking inside the dialog
  useClickOutside(ref, closeDialog);

  const trendingProducts = getTrendingProducts();
  const popularSuggestions = getPopularSuggestions();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='trending__products__dialog'
    >
      <h3>Latest Trends</h3>

      <div className='trending__products__dialog__products_row'>
        {trendingProducts.map(({ id, name, image }) => (
          <TrendingProductCard image={image} key={id} name={name} />
        ))}
      </div>

      <h3>Popular Suggestions</h3>

      <div className='trending__products__dialog__popular__suggestions'>
        {popularSuggestions.map((val, i) => (
          <p key={i}>{val}</p>
        ))}
      </div>
    </motion.div>
  );
};
