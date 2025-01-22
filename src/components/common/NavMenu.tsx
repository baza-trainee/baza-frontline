import { useState, useRef, useEffect } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';
import { useSelect } from '@/stores/selectStore';

interface NavMenuProps {
  onClose?: () => void;
  className?: string;
  dropDownClassName?: string;
}

const NavMenu = ({ onClose, className, dropDownClassName }: NavMenuProps) => {
  const [showSelect, setShowSelect] = useState(false);
  const { setSelect } = useSelect();
  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSelect(false);
        setSelect(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSelect]);

  const handleSelect = () => {
    setShowSelect(!showSelect);
    setSelect(showSelect);
  };

  return (
    <ul className={cn('relative z-50 w-full text-[16px] font-[500]', className)}>
      <li>
        <Link
          to='/'
          onClick={onClose}
          aria-label='Перейти до головної сторінки'
          className={cn(
            'border-b p-2 transition-colors duration-300',
            pathname === '/' ? 'border-black' : 'border-transparent hover:border-black',
          )}
        >
          Головна
        </Link>
      </li>
      <li className='relative' ref={dropdownRef}>
        <button
          onClick={handleSelect}
          className={cn(
            'flex items-center gap-2 border-b p-2 transition-colors duration-300',
            showSelect
              ? 'border-black text-blue-500'
              : 'border-transparent text-inherit hover:border-black',
          )}
          aria-expanded={showSelect}
          aria-controls='target-collection-list'
        >
          Цільові збори {showSelect ? <IoChevronUp /> : <IoChevronDown />}
        </button>

        {showSelect && (
          <ul
            id='target-collection-list'
            className={cn('flex w-max min-w-full flex-col gap-2 py-4', dropDownClassName)}
          >
            <li className='flex items-center gap-2'>
              <img src='/header/100ombr.png' alt='100 ОМБР logo' className='h-[14px] w-[12px]' />
              <Link
                to='/100ombr'
                onClick={onClose}
                className={cn(pathname === '/100ombr' ? 'text-blue-500' : 'hover:text-blue-500')}
              >
                100 ОМБР
              </Link>
            </li>
            <li className='flex items-center gap-2'>
              <img src='/header/44ombr.png' alt='44 ОМБР logo' className='h-[14px] w-[12px]' />
              <Link
                to='/44ombr'
                onClick={onClose}
                className={cn(pathname === '/44ombr' ? 'text-blue-500' : 'hover:text-blue-500')}
              >
                44 ОМБР
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li>
        <Link
          to='/contacts'
          onClick={onClose}
          aria-label='Перейти до сторінки Контакти'
          className={cn(
            'border-b p-2 transition-colors duration-300',
            pathname === '/contacts' ? 'border-black' : 'border-transparent hover:border-black',
          )}
        >
          Контакти
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
