import React from 'react';
import DonationSection from '@/components/brigades/DonationSection';
import ImageSection from '@/components/brigades/ImagesTabs';
import PowerSection from '@/components/brigades/PowerSection';
import ReportingSection from '@/components/brigades/ReportingSection';
import ShareSection from '@/components/brigades/ShareSection';
import BrigadePageTitle from '@/components/common/BrigadePageTitle';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import { images100 } from '@/constants/images';
import { powerSectionData100 } from '@/constants/powerSection';

const images = [
  { src: '/reporting/reporting100_1.webp', alt: 'Фото 100 ОМБр' },
  { src: '/reporting/reporting100_2.webp', alt: 'Фото 100 ОМБр' },
  { src: '/reporting/reporting100_3.webp', alt: 'Фото 100 ОМБр' },
  { src: '/reporting/reporting100_4.webp', alt: 'Фото 100 ОМБр' },
];

const Brigade100Page: React.FC = () => {
  const currentDate = new Date().toISOString();

  return (
    <>
      <SEO
        title='100 ОМБр - Підтримка бригади | Baza Frontline'
        description='Підтримайте 100-ту окрему механізовану бригаду ЗСУ. Ваша допомога наближає перемогу України!'
        url='/100'
        type='website'
        keywords={[
          '100 ОМБр',
          '100 бригада',
          'підтримка військових',
          'допомога армії',
          'механізована бригада',
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
      <main className='flex min-h-screen flex-col'>
        <Container>
          <BrigadePageTitle title='100 окрема механізована бригада' image='/logo/logo100.svg' />
          <ImageSection images={images100} />
          <PowerSection {...powerSectionData100} />
          <DonationSection bank='private' />
          <ReportingSection images={images} />
          <ShareSection title='Підтримай 100-ту окрему бригаду' />
        </Container>
      </main>
    </>
  );
};

export default Brigade100Page;
