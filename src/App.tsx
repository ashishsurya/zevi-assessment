import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { SearchPage } from './components/pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
