import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchPage.scss';
import { SearchBar } from '../SearchBar/SearchBar';
import { Logo } from '../Logo/Logo';
import { Filters } from '../Filters/Filters';
import { Products } from '../Products/Products';
import { useProducts } from '../../zustand/useProducts';

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  const [searchParams] = useSearchParams();
  const { products } = useProducts();

  const getBrands = () => {
    return Array.from(new Set(products.map((product) => product.brand)));
  };

  return (
    <div className='searchpage__wrapper'>
      <div className='searchpage__wrapper__header'>
        <div className='searchpage__wrapper__header__searchbar__wrapper'>
          <SearchBar />
        </div>
        <Logo />
      </div>
      <h1>Search Results</h1>
      <div className='searchpage__wrapper__product_filter_wrapper'>
        <Filters brands={getBrands()} />
        <Products />
      </div>
    </div>
  );
};
