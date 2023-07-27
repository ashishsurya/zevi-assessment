import { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import './HomePage.scss';
import { useTrendsDialogStore } from '../../zustand/useTrendsDialog';
import { AnimatePresence } from 'framer-motion';
import { TrendingProducts } from '../TrendingProdcuts/TrendingProducts';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const { open } = useTrendsDialogStore();
  return (
    <div className='HomePage__wrapper'>
      <div className='HomePage'>
        <div className='HomePage__Logo'>
          <Logo />
        </div>
        <div className='HomePage__searchbar'>
          <SearchBar />
          <AnimatePresence>{open && <TrendingProducts />}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};
