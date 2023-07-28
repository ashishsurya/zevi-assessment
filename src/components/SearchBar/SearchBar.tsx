import { FC, useState } from 'react';
import { useTrendsDialogStore } from '../../zustand/useTrendsDialog';
import './SearchBar.scss';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onFocus?: () => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onFocus }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue === '') {
      return;
    }

    const searchSlug = searchValue.trim().toLowerCase();
    navigate(`/search?q=${searchSlug}`);
  };

  return (
    <form onSubmit={handleSearchForm} className='searchbar__container'>
      <input
        onFocus={onFocus}
        type='text'
        placeholder='Search'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>
    </form>
  );
};
