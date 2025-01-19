import Motto from '../ui/Motto';
import NavMenu from './NavMenu';

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='absolute inset-0 top-[80px] z-20 h-full w-full bg-white/70 backdrop-blur-md lg:hidden'>
      <nav className='flex h-[304px] w-full flex-col items-center justify-center bg-[#F4F6FD] px-4 py-2'>
        <NavMenu onClose={onClose} className='space-y-6' />
        <hr className='mt-4 w-full border-[0.2px] border-gray-300/50' />
        <Motto className='pt-6' />
      </nav>
    </div>
  );
};

export default MobileMenu;
