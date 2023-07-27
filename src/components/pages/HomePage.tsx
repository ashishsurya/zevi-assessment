import { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import './HomePage.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {



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
