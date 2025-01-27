import ReportingSection from '@/components/brigades/ReportingSection';
import ShareSection from '@/components/brigades/ShareSection';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';

const Brigade100Page = () => {
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
          <ReportingSection />
          <ShareSection title='Підтримай 100-ту окрему бригаду' />
        </Container>
      </main>
    </>
  );
};

export default Brigade100Page;
