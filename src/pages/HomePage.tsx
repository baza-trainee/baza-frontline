import Questions from '@/components/questions/Questions.tsx';
import Donate from '../components/home/Donate.tsx';
import Mission from '../components/home/Mission.tsx';

const HomePage = () => {
  return (
    <>
      <Donate />
      <Mission />
      <Questions />
    </>
  );
};

export default HomePage;
