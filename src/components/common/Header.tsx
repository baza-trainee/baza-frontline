import { useState } from 'react';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useDisableScroll(showMobileMenu);

  const closeMobileMenu = () => {
    setTimeout(() => {
      setShowMobileMenu(false);
    }, 50);
  };

  return (
    <header className='flex w-full items-center justify-between px-4 py-[10px]'>
      <img src='/header/logo-mobile.png' alt='Baza Frontline лого' />
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className='md:hidden'
        aria-label={showMobileMenu ? 'Закрити мобільне меню' : 'Відкрити мобільне меню'}
      >
        <img
          src={showMobileMenu ? '/header/close.svg' : '/header/burger.svg'}
          alt={showMobileMenu ? 'закрити меню' : 'відкрити меню'}
        />
      </button>
      {showMobileMenu && <MobileMenu onClose={closeMobileMenu} />}
    </header>
  );
};

export default Header;
