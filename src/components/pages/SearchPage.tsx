import { FC, useCallback } from 'react';
import { Product } from '../../utils/types';
import { useFilterStore } from '../../zustand/useFilter';
import { useProducts } from '../../zustand/useProducts';
import { Filters } from '../Filters/Filters';
import { Logo } from '../Logo/Logo';
import { Products } from '../Products/Products';
import { SearchBar } from '../SearchBar/SearchBar';
import './SearchPage.scss';

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  const { products } = useProducts();
  const { brands, ratings } = useFilterStore();

  const getBrands = useCallback(() => {
    return Array.from(new Set(products.map((product) => product.brand)));
  }, [products]);

  const filteredProducts = useCallback(
    (products: Product[]) => {
      if (brands.length === 0 && ratings.length === 0) {
        return products;
      }
      if (brands.length === 0 || ratings.length === 0) {
        if (brands.length === 0) {
          return products.filter((product) => {
            return ratings.includes(product.rating);
          });
        }

        if (ratings.length === 0) {
          return products.filter((product) => {
            return brands.includes(product.brand);
          });
        }
      }

      return products.filter((product) => {
        return (
          brands.includes(product.brand) && ratings.includes(product.rating)
        );
      });
    },
    [brands, ratings]
  );

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
