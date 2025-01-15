import { Route, Routes } from 'react-router';
import ContactsPage from './pages/Contacts';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contacts' element={<ContactsPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
