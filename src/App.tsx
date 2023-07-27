import React from 'react';

import './App.scss';
import { Logo } from './components/Logo/Logo';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className='App'>
      <div className='App__Logo'>
        <Logo />
      </div>

      <SearchBar />
    </div>
  );
}

export default App;
