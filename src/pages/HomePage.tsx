import SEO from '@/components/common/SEO';
import Donate from '@/components/home/Donate.tsx';
import Marquee from '@/components/home/Marquee.tsx';
import Mission from '@/components/home/Mission.tsx';
import Hero from '@/components/home/hero/Hero.tsx';
import Needs from '@/components/home/needs/Needs.tsx';
import Questions from '@/components/questions/Questions.tsx';

const HomePage = () => {
  const currentDate = new Date().toISOString();

  return (
    <>
      <SEO
        title='Baza Frontline - Підтримка українських військових'
        description='Baza Frontline - платформа для підтримки українських військових. Допомога 44 ОАБр та 100 ОМБр. Разом до перемоги!'
        url='/'
        type='website'
        keywords={[
          'Baza Frontline',
          'підтримка військових',
          'допомога армії',
          '44 ОМБр',
          '100 ОМБр',
          'волонтерська допомога',
          'підтримка ЗСУ',
          'донати військовим',
          'допомога фронту',
          'Україна',
        ]}
        language='uk'
        modifiedTime={currentDate}
        noindex={false}
        nofollow={false}
      />
      <main>
        <Hero />
        <Marquee />
        <Needs />
        <Donate />
        <Mission />
        <Questions />
      </main>
    </>
  );
};

export default HomePage;
