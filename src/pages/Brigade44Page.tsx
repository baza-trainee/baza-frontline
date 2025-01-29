import React from 'react';
import DonationSection from '@/components/brigades/DonationSection';
import ImageSection from '@/components/brigades/ImagesTabs';
import InvinciSection from '@/components/brigades/Invincibility';
import PowerSection from '@/components/brigades/PowerSection';
import ReportingSection from '@/components/brigades/ReportingSection';
import ShareSection from '@/components/brigades/ShareSection';
import BrigadePageTitle from '@/components/common/BrigadePageTitle';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import { images44 } from '@/constants/images';
import { powerSectionData44 } from '@/constants/powerSection';

const Brigade44Page: React.FC = () => {
  const currentDate = new Date().toISOString();

  return (
    <>
      <SEO
        title='44 ОАБр - Підтримка бригади | Baza Frontline'
        description='Підтримайте 44-ту окрему артилерійську бригаду ЗСУ. Ваша допомога наближає перемогу України!'
        url='/44'
        type='website'
        keywords={[
          '44 ОАБр',
          '44 бригада',
          'підтримка військових',
          'допомога армії',
          'артилерійська бригада',
          'волонтерська допомога',
          'підтримка ЗСУ',
          'донати військовим',
          'допомога фронту',
          'Україна',
        ]}
        language='uk'
        modifiedTime={currentDate}
        noindex={false}
      />
      <main className='flex min-h-screen flex-col items-center justify-center'>
        <Container>
          <BrigadePageTitle title='44 Окрема Механізована Бригада' image='/logo/logo44.svg' />
          <ImageSection images={images44} />
          <PowerSection {...powerSectionData44} />
          <InvinciSection />
          <DonationSection bank='monobank' />
          <ReportingSection />
          <ShareSection title='Підтримай 44-ту окрему бригаду' />
        </Container>
      </main>
    </>
  );
};

export default Brigade44Page;
