import { useState } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

interface NavMenuProps {
  onClose?: () => void;
  className?: string;
  dropDownClassName?: string;
}

const NavMenu = ({ onClose, className, dropDownClassName }: NavMenuProps) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <ul
      className={cn('relative z-50 h-full min-h-[100px] w-full text-[16px] font-[500]', className)}
    >
      <li>
        <Link to='/' onClick={onClose} aria-label='Перейти до головної сторінки'>
          Головна
        </Link>
      </li>
      <li className='relative'>
        <button
          onClick={() => setShowSelect(!showSelect)}
          className={cn(showSelect ? 'text-blue-500' : 'text-inherit', 'flex items-center gap-2')}
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
              <Link to='/' onClick={onClose} className='hover:text-blue-500'>
                100 ОМБР
              </Link>
            </li>
            <li className='flex items-center gap-2'>
              <img src='/header/44ombr.png' alt='44 ОМБР logo' className='h-[14px] w-[12px]' />
              <Link to='/' onClick={onClose} className='hover:text-blue-500'>
                44 ОМБР
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li>
        <Link to='/contacts' onClick={onClose} aria-label='Перейти до сторінки Контакти'>
          Контакти
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
