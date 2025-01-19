import Donate from '@/components/home/Donate.tsx';
import Marquee from '@/components/home/Marquee.tsx';
import Mission from '@/components/home/Mission.tsx';
import Hero from '@/components/home/hero/Hero.tsx';
import Needs from '@/components/home/needs/Needs.tsx';
import Questions from '@/components/questions/Questions.tsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Needs />
      <Donate />
      <Mission />
      <Questions />
    </>
  );
};

export default HomePage;
