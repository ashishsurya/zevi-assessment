import { FC } from 'react';
import "./Logo.scss"


interface logoProps {}

export const Logo: FC<logoProps> = ({}) => {
  return (
    <img
      className='logo__img'
      src='https://uploads-ssl.webflow.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp'
      alt='logo'
    />
  );
};
