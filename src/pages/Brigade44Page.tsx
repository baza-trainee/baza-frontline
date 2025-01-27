import ImageSection from '@/components/brigades/ImagesTabs';
import InvinciSection from '@/components/brigades/Invincibility';
import PowerSection from '@/components/brigades/PowerSection';
import ReportingSection from '@/components/brigades/ReportingSection';
import ShareSection from '@/components/brigades/ShareSection';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';

const Brigade44Page = () => {
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
        <ImageSection />
        <Container>
          <PowerSection />
        </Container>
        <Container>
          <InvinciSection />
        </Container>
        <ReportingSection />
        <Container>
          <ShareSection title='Підтримай 44-ту окрему бригаду' />
        </Container>
      </main>
    </>
  );
};

export default Brigade44Page;
