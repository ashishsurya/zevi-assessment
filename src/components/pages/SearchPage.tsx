import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchPage.scss';
import { SearchBar } from '../SearchBar/SearchBar';
import { Logo } from '../Logo/Logo';
import { Filters } from '../Filters/Filters';
import { Products } from '../Products/Products';
import { useProducts } from '../../zustand/useProducts';
import { useFilterStore } from '../../zustand/useFilter';
import { Product } from '../../utils/types';

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  const { products } = useProducts();
  const { brands, ratings } = useFilterStore();

  const getBrands = () => {
    return Array.from(new Set(products.map((product) => product.brand)));
  };

  const filteredProducts = (products: Product[]) => {
    if (brands.length === 0 && ratings.length === 0) {
      return products;
    }

    return products.filter((product) => {
      return (
        (brands.length > 0 && brands.includes(product.brand)) ||
        (ratings.length > 0 && ratings.includes(product.rating))
      );
    });
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
        <Products products={filteredProducts(products)} />
      </div>
    </div>
  );
};
