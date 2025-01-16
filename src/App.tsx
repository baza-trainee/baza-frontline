import { Route, Routes } from 'react-router';
import Header from './components/common/Header';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
