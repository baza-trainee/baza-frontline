import { useNavigate } from 'react-router';
import Button from '@/components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-50'>
      <div className='px-4 text-center lg:px-6'>
        <h1 className='text-gradient font-montserrat text-[120px] font-[500] leading-tight sm:text-[150px] md:text-[180px] lg:text-[200px]'>
          404
        </h1>
        <h2 className='mx-auto mt-4 max-w-2xl font-playfairDisplay text-2xl font-bold sm:text-3xl md:text-4xl'>
          Здається, ви потрапили не туди...
        </h2>
        <div className='mt-6 sm:mt-8'>
          <Button text='На головну' onClick={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
