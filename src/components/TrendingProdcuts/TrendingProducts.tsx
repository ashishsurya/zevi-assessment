import { ElementRef, FC, useRef } from 'react';
import './TrendingProducts.scss';
import { motion } from 'framer-motion';
import { useClickOutside } from 'react-haiku';
import { useTrendsDialogStore } from '../../zustand/useTrendsDialog';

interface TrendingProductsProps {}

export const TrendingProducts: FC<TrendingProductsProps> = ({}) => {
  const ref = useRef<ElementRef<'div'>>(null);
  const { closeDialog } = useTrendsDialogStore();

  useClickOutside(ref, closeDialog);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='trending__products__dialog'
    >
      <p>Latest Trends</p>
    </motion.div>
  );
};
