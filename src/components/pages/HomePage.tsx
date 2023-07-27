import { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import './HomePage.scss';
import {faker} from "@faker-js/faker"

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({ }) => {
  
  console.log(faker.commerce.productName())

  return (
    <div className='HomePage__wrapper'>
      <div className='App'>
        <div className='App__Logo'>
          <Logo />
        </div>
        <SearchBar />
      </div>
    </div>
  );
};
