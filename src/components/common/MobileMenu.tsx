import { useSelect } from '@/hooks/selectStore';
import { cn } from '@/lib/utils';
import Motto from '../ui/Motto';
import NavMenu from './NavMenu';

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const { isSelectOpen } = useSelect();
  return (
    <div className='absolute inset-0 top-[80px] z-20 h-full w-full bg-white/70 backdrop-blur-md lg:hidden'>
      <nav
        className={cn(
          isSelectOpen ? 'h-[304px]' : 'h-[382px]',
          'flex w-full flex-col items-center justify-start bg-[#F4F6FD] px-4 py-[20px]',
        )}
      >
        <NavMenu onClose={onClose} className='flex flex-col items-start justify-center space-y-6' />
        <hr className='mt-4 w-full border-[0.2px] border-gray-300/50' />
        <Motto className='pt-6' />
      </nav>
    </div>
  );
};

export default MobileMenu;
