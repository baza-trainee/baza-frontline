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
      <img src='/header/logo-mobile.png' alt='logo' />
      <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='md:hidden'>
        <img src={showMobileMenu ? '/header/close.svg' : '/header/burger.svg'} alt='burger' />
      </button>
      {showMobileMenu && <MobileMenu onClose={closeMobileMenu} />}
    </header>
  );
};

export default Header;
