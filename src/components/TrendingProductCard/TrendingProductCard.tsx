import { FC } from 'react';
import './TrendingProductCard.scss';

interface TrendingProductCardProps {
  image: string;
  name: string;
}

export const TrendingProductCard: FC<TrendingProductCardProps> = ({
  image,
  name,
}) => {
  return (
    <div className='trending__product__card'>
      <img src={image} alt='' />
      <p>{name}</p>
    </div>
  );
};
