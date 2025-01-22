import { useState } from 'react';
import { Link } from 'react-router';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import Motto from '../ui/Motto';
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useDisableScroll(showMobileMenu);

  const closeMobileMenu = () => {
    setTimeout(() => {
      setShowMobileMenu(false);
    }, 50);
  };

  return (
    <header className='h-[80px] border-b border-b-gray-300'>
      <nav className='flex w-full items-center justify-between px-4 py-[10px] lg:px-[40px]'>
        <Link to='/' className='lg:w-[200px]'>
          <img src='/logo/logoSM.svg' alt='Baza Frontline лого' />
        </Link>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className='lg:hidden'
          aria-label={showMobileMenu ? 'Закрити мобільне меню' : 'Відкрити мобільне меню'}
        >
          <img
            src={showMobileMenu ? '/header/close.svg' : '/header/burger.svg'}
            alt={showMobileMenu ? 'закрити меню' : 'відкрити меню'}
          />
        </button>
        <NavMenu
          className='hidden flex-1 items-center justify-center gap-10 lg:absolute lg:left-1/3 lg:flex lg:-translate-x-1/2 xl:left-1/2'
          dropDownClassName='absolute left-0 top-[30px] w-full bg-gray-200 rounded-lg p-4 shadow-lg'
        />
        <Motto className='hidden w-[288px] lg:block' />
        {showMobileMenu && <MobileMenu onClose={closeMobileMenu} />}
      </nav>
    </header>
  );
};

export default Header;
