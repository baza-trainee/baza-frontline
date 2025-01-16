import { useState } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import { cn } from '@/lib/utils';

const NavMenu = ({ onClose }: { onClose: () => void }) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <ul className='w-full space-y-2 text-[16px] font-[500]'>
      <li>
        <a href='/' onClick={onClose} aria-label='Перейти до головної сторінки'>
          Головна
        </a>
      </li>
      <li>
        <span
          className={cn(showSelect ? 'text-blue-500' : 'text-inherit', 'flex items-center gap-2')}
        >
          Цільові збори{' '}
          <button
            onClick={() => setShowSelect(!showSelect)}
            className='font-[400]'
            aria-expanded={showSelect}
            aria-controls='target-collection-list'
          >
            {showSelect ? <IoChevronUp /> : <IoChevronDown />}
          </button>
        </span>
        {showSelect && (
          <div className='mt-2 space-y-2' id='target-collection-list'>
            <li className='flex items-center gap-2'>
              <img src='/header/100ombr.png' alt='100 ОМБР logo' className='h-[14px] w-[12px]' />
              <a href='/' onClick={onClose}>
                100 ОМБР
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <img src='/header/44ombr.png' alt='44 ОМБР logo' className='h-[14px] w-[12px]' />
              <a href='/' onClick={onClose}>
                44 ОМБР
              </a>
            </li>
          </div>
        )}
      </li>
      <li>
        <a href='/contacts' onClick={onClose} aria-label='Перейти до сторінки Контакти'>
          Контакти
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
