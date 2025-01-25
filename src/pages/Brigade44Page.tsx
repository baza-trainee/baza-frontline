import PowerSection from '@/components/brigades/PowerSection';
import ShareSection from '@/components/brigades/ShareSection';
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
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <PowerSection />
        {/* <DonationForm bankType='monobank' /> */}
        <ShareSection title='Підтримай 44-ту окрему бригаду' />
      </div>
    </>
  );
};

export default Brigade44Page;
