import NavMenu from './NavMenu';

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='absolute inset-0 top-[68px] z-20 h-full w-full bg-white/70 backdrop-blur-md md:hidden'>
      <nav className='flex h-[304px] w-full flex-col items-center justify-center bg-[#F4F6FD] px-4 py-2'>
        <NavMenu onClose={onClose} />
        <h2 className='pt-6 text-center font-playfairDisplay text-[20px] font-[700]'>
          Тил — наш фронт. Тримаємо його до перемоги!
        </h2>
      </nav>
    </div>
  );
};

export default MobileMenu;
