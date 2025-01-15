import { useNavigate } from 'react-router';
import Heart from '@/components/icons/Heart';
import Button from '@/components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-50'>
      <div className='px-4 text-center'>
        <h1 className='text-gradient text-[200px] font-bold'>404</h1>
        <h2 className='mt-4 text-4xl font-bold'>Здається, ви потрапили не туди...</h2>
        <Button text='На головну' icon={<Heart />} onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default NotFound;
