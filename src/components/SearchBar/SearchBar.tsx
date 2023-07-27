import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { useTrendsDialogStore } from '../../zustand/useTrendsDialog';
import { TrendingProducts } from '../TrendingProdcuts/TrendingProducts';
import './SearchBar.scss';

interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = ({}) => {
  const { openDialog, open } = useTrendsDialogStore();
  return (
    <div className='searchbar__container'>
      <input onFocus={openDialog} type='text' placeholder='Search' />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1'
        stroke='currentColor'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>

      <AnimatePresence>{open && <TrendingProducts />}</AnimatePresence>
    </div>
  );
};
