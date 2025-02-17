import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router';
import Header from './components/common/Header';
import Footer from './components/common/footer/Footer';
import Brigade44Page from './pages/Brigade44Page';
import Brigade100Page from './pages/Brigade100Page';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const PdfView = lazy(() => import('./pages/PdfView'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className='flex min-h-[50vh] items-center justify-center'>
    <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500'></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/контакти' element={<ContactsPage />} />
          <Route path='/44-ОМБр' element={<Brigade44Page />} />
          <Route path='/100-ОМБр' element={<Brigade100Page />} />
          <Route path='/documents/:fileName' element={<PdfView />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
