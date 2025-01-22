import { Suspense, lazy } from 'react';
import SEO from '@/components/common/SEO';
import SectionLoader from '@/components/common/SectionLoader';
import Marquee from '@/components/home/Marquee.tsx';
import Hero from '@/components/home/hero/Hero.tsx';

const Needs = lazy(() => import('@/components/home/needs/Needs.tsx'));
const Donate = lazy(() => import('@/components/home/Donate.tsx'));
const Mission = lazy(() => import('@/components/home/Mission.tsx'));
const Questions = lazy(() => import('@/components/home/Questions'));

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
        <Suspense fallback={<SectionLoader />}>
          <Needs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Donate />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Mission />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Questions />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
