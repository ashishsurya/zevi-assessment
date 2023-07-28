import { FC } from 'react';
import './Filters.scss';
import { useFilterStore } from '../../zustand/useFilter';
import { Rating } from '@smastrom/react-rating';
interface FiltersProps {
  brands: string[];
}

export const Filters: FC<FiltersProps> = ({ brands }) => {
  return (
    <div className='filters'>
      <div className='filters__brands'>
        <h3>Brands</h3>
        {brands.map((brand) => (
          <BrandFilter key={brand} brand={brand} />
        ))}
      </div>
      <div className='filters__ratings'>
        <h3>Filters</h3>
        <RatingFilter rating={5} />
        <RatingFilter rating={4} />
        <RatingFilter rating={3} />
        <RatingFilter rating={2} />
        <RatingFilter rating={1} />
      </div>
    </div>
  );
};

const BrandFilter = ({ brand }: { brand: string }) => {
  const { brands, removeBrand, addBrand } = useFilterStore();

  return (
    <div className='filters__brands__brand'>
      <input
        id={brand}
        type='checkbox'
        checked={brands.includes(brand)}
        onChange={() => {
          if (brands.includes(brand)) {
            removeBrand(brand);
          } else {
            addBrand(brand);
          }
        }}
      />
      <label htmlFor={brand}>{brand}</label>
    </div>
  );
};

const RatingFilter = ({ rating }: { rating: number }) => {
  const { ratings, removeRating, addRating } = useFilterStore();

  return (
    <div className='filters__ratings__rating'>
      <input
        type='checkbox'
        checked={ratings.includes(rating)}
        onChange={() => {
          if (ratings.includes(rating)) {
            removeRating(rating);
          } else {
            addRating(rating);
          }
        }}
        id={`rating-${rating}`}
      />
      <label htmlFor={`rating-${rating}`}>
        <Rating value={rating} readOnly style={{ maxWidth: 75 }} />
      </label>
    </div>
  );
};
