import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import PdfView from './pages/PdfView';

function App() {
  return (
    <HelmetProvider>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/documents/:fileName' element={<PdfView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
