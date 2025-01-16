import { useState } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import { cn } from '@/lib/utils';

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div className='absolute inset-0 top-[68px] z-20 h-full w-full bg-white/70 backdrop-blur-md md:hidden'>
      <nav className='flex h-[304px] w-full flex-col items-center justify-center bg-[#F4F6FD] px-4 py-2'>
        <ul className='w-full space-y-2 text-[16px] font-[500]'>
          <li>
            <a href='/' onClick={onClose}>
              Головна
            </a>
          </li>
          <li>
            <span
              className={cn(
                showSelect ? 'text-blue-500' : 'text-inherit',
                'flex items-center gap-2',
              )}
            >
              Цільові збори{' '}
              <button onClick={() => setShowSelect(!showSelect)} className='font-[400]'>
                {showSelect ? <IoChevronUp /> : <IoChevronDown />}
              </button>
            </span>
            {showSelect && (
              <div className='mt-2 space-y-2'>
                <li className='flex items-center gap-2'>
                  <img src='/header/100ombr.png' alt='100ombr logo' className='h-[14px] w-[12px]' />
                  <a href='/' onClick={onClose}>
                    100 ОМБР
                  </a>
                </li>
                <li className='flex items-center gap-2'>
                  <img src='/header/44ombr.png' alt='44ombr logo' className='h-[14px] w-[12px]' />
                  <a href='/' onClick={onClose}>
                    44 ОМБР
                  </a>
                </li>
              </div>
            )}
          </li>
          <li>
            <a href='/contacts' onClick={onClose}>
              Контакти
            </a>
          </li>
        </ul>
        <h2 className='pt-6 text-center font-playfairDisplay text-[20px] font-[700]'>
          Тил — наш фронт. Тримаємо його до перемоги!
        </h2>
      </nav>
    </div>
  );
};

export default MobileMenu;
