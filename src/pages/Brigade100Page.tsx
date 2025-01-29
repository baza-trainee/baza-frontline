import React from 'react';
import ImageSection from '@/components/brigades/ImagesTabs';
import PowerSection from '@/components/brigades/PowerSection';
import ReportingSection from '@/components/brigades/ReportingSection';
import ShareSection from '@/components/brigades/ShareSection';
import BrigadePageTitle from '@/components/common/BrigadePageTitle';
import { powerSectionData100 } from '@/components/common/Brigady';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';

const Brigade100Page: React.FC = () => {
  const currentDate = new Date().toISOString();

  const images = [
    { src: '/brigade-100/brigade-img_1.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-100/brigade-img_2.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-100/brigade-img_3.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-100/brigade-img_4.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-100/brigade-img_5.jpg', alt: 'brigade-44-img' },
  ];

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
        <BrigadePageTitle title='100 окрема механізована бригада' image='/logo/logo100.svg' />
        <ImageSection images={images} />
        <PowerSection {...powerSectionData100} />
        <Container>
          <ReportingSection />
          <ShareSection title='Підтримай 100-ту окрему бригаду' />
        </Container>
      </main>
    </>
  );
};

export default Brigade100Page;
