import Donate from '../components/Donate/Donate.tsx';
import Mission from '../components/Mission/Mission.tsx';

const HomePage = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-green-700 underline'>Baza Frontline</h1>
      <Donate />
      <Mission />
    </>
  );
};

export default HomePage;
