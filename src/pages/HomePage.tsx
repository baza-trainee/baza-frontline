import Questions from '@/components/questions/Questions.tsx';
import Donate from '../components/Donate/Donate.tsx';
import Mission from '../components/Mission/Mission.tsx';


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
